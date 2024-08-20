import NextAuth, { DefaultSession } from 'next-auth';
import { PrismaAdapter } from '@auth/prisma-adapter';
import Resend from 'next-auth/providers/resend';
import { prisma } from '../persistence/prisma';
import { User as DomainUser } from '@/core/domain/entities/User';
import { User as SessionUser } from 'next-auth';
import { Language, LanguageEnum } from '@/core/domain/value-objects/Language';
import { Theme, ThemeEnum } from '@/core/domain/value-objects/Theme';
import { AdapterUser } from 'next-auth/adapters';
import { getLangFromCookies, getThemeFromCookies } from '../persistence/cookies.utils';

declare module 'next-auth' {
  interface Session {
    user: AppSessionUser & AdapterUser;
  }

  interface AppSessionUser extends SessionUser {
    isAuthorized: boolean;
    preferredLanguage: LanguageEnum;
    preferredTheme: ThemeEnum;
  }
}

const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Resend({
      from: 'no-reply@skorkuts.com',
    }),
  ],
  callbacks: {
    async session({ session, user }) {
      try {
        const dbUser = await prisma.user.findUnique({
          where: { id: user.id },
          include: {
            settings: true,
          },
        });

        if (!dbUser) {
          console.error(`User with ID ${user.id} not found in the database.`);
          session.user.isAuthorized = false;
          return session;
        }

        if (!dbUser.settings) {
          dbUser.settings = await prisma.userSettings.upsert({
            where: {
              userId: dbUser.id,
            },
            create: {
              userId: dbUser.id,
              preferredLanguage: getLangFromCookies(),
              preferredTheme: getThemeFromCookies(),
            },
            update: {},
          });
        }

        session.user = {
          ...user,
          name: dbUser.name,
          image: dbUser.image,
          preferredLanguage: dbUser.settings.preferredLanguage as LanguageEnum,
          preferredTheme: dbUser.settings.preferredTheme as ThemeEnum,
          isAuthorized: true,
        };
      } catch (error) {
        console.error('Error creating user session', error);
        session.user.isAuthorized = false;
        return session;
      }
      return session;
    },
  },
});

type AuthResult =
  | {
      isAuthorized: true;
      user: DomainUser;
    }
  | {
      isAuthorized: false;
      guest: {
        preferredLanguage: LanguageEnum;
        preferredTheme: ThemeEnum;
      };
    };

async function getUserOrGuest(): Promise<AuthResult> {
  const session = await auth();

  if (!session?.user?.isAuthorized) {
    return {
      isAuthorized: false,
      guest: {
        preferredLanguage: getLangFromCookies(),
        preferredTheme: getThemeFromCookies(),
      },
    };
  }

  const domainUser = new DomainUser(
    session.user.id!,
    session.user.email!,
    Language.create(session.user.preferredLanguage),
    Theme.create(session.user.preferredTheme),
    session.user.name ?? undefined,
    session.user.image ?? undefined,
  );

  return { isAuthorized: true, user: domainUser };
}

export { handlers, signIn, signOut, getUserOrGuest };
