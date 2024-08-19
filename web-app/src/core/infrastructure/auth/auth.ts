import NextAuth from 'next-auth';
import { PrismaAdapter } from '@auth/prisma-adapter';
import Resend from 'next-auth/providers/resend';
import { prisma } from '../persistence/prisma';

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Resend({
      from: 'no-reply@skorkuts.com',
    }),
  ],
});
