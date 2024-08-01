import bcrypt from 'bcrypt';
import { prisma } from '@/prisma';
import { AuthSchema } from './auth.schema';
import { createUser, getUser } from './auth.db';

export async function signUp({ email, password }: { email: string; password: string }) {
  const user = await getUser(email);
  if (user) throw new Error('There is already a user with this email');

  const passwordHash = await bcrypt.hash(password, 10);

  await createUser({
    name: email,
    email,
    passwordHash,
  });
}

export async function signIn({ email, password }: { email: string; password: string }) {}
