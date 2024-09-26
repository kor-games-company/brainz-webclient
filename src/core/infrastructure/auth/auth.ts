import NextAuth from 'next-auth';
import { PrismaAdapter } from '@auth/prisma-adapter';
import Resend from 'next-auth/providers/resend';
import { prisma } from '../persistence/prisma';
import { User as DomainUser } from '@/core/domain/entities/User';
import { User as SessionUser } from 'next-auth';
import { LanguageEnum } from '@/core/domain/value-objects/Language';
import { ThemeEnum } from '@/core/domain/value-objects/Theme';
import { AdapterUser } from 'next-auth/adapters';
import {
  getGuestNameFromCookies,
  getLangFromCookies,
  getThemeFromCookies,
} from '../persistence/cookies.utils';
import { DbUserRole } from '@prisma/client';
import { UserRoleEnum } from '@/core/domain/value-objects/UserRole';

declare module 'next-auth' {
  interface Session {
    user: AppSessionUser & AdapterUser;
  }

  interface AppSessionUser extends SessionUser {
    role: UserRoleEnum;
    preferredLanguage: LanguageEnum;
    preferredTheme: ThemeEnum;
    imageAssetsPath: string | null;
    imageBlobKey: string | null;
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
            profile: true,
          },
        });

        if (!dbUser) {
          console.error(`User with ID ${user.id} not found in the database.`);
          session.user.role = UserRoleEnum.guest;
          return session;
        }

        if (!dbUser.profile) {
          dbUser.profile = await prisma.dbUserProfile.create({
            data: {
              userId: dbUser.id,
              preferredLanguage: getLangFromCookies(),
              preferredTheme: getThemeFromCookies(),
              role: DbUserRole.user,
            },
          });
        }

        session.user = {
          ...user,
          name: dbUser.name,
          preferredLanguage: dbUser.profile.preferredLanguage as LanguageEnum,
          preferredTheme: dbUser.profile.preferredTheme as ThemeEnum,
          role: dbUser.profile.role as UserRoleEnum,
          imageAssetsPath: dbUser.profile.imageAssetsPath,
          imageBlobKey: dbUser.profile.imageBlobKey,
        };
      } catch (error) {
        console.error('Error creating authorized user session', error);
        session.user.role = UserRoleEnum.guest;
        return session;
      }
      return session;
    },
  },
});

async function getUser(): Promise<DomainUser> {
  const session = await auth();

  if (!session?.user || session?.user?.role === UserRoleEnum.guest) {
    return DomainUser.create('unauthorized@guest.com', {
      name: getGuestNameFromCookies(),
      role: UserRoleEnum.guest,
      preferredLanguage: getLangFromCookies(),
      preferredTheme: getThemeFromCookies(),
    }).unwrap();
  }

  return DomainUser.create(session.user.email!, {
    existingId: session.user.id,
    role: session.user.role,
    name: session.user.name ?? undefined,
    preferredLanguage: session.user.preferredLanguage,
    preferredTheme: session.user.preferredTheme,
    imageAssetsPath: session.user.imageAssetsPath ?? undefined,
    imageBlobKey: session.user.imageBlobKey ?? undefined,
  }).unwrap();
}

export { handlers, signIn, signOut, getUser };
