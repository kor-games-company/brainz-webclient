'use server';

import { ZodError } from 'zod';
import bcrypt from 'bcrypt';
import { AuthSchema } from '@/auth/auth.schema';
import { createUser, getUser } from '@/auth/auth.db';
import { signIn, signUp } from '@/auth/auth';
import { redirect } from 'next/navigation';

export async function signup(
  prevState:
    | {
        email?: string[] | undefined;
        password?: string[] | undefined;
      }
    | string
    | undefined,
  formData: FormData,
) {
  const creds = { email: formData.get('email'), password: formData.get('password') };
  const parsedCreds = AuthSchema.safeParse(creds);
  if (!parsedCreds.success) return parsedCreds.error.flatten().fieldErrors;

  try {
    await signUp(parsedCreds.data);
  } catch (error) {
    if (error instanceof Error) {
      return error.message;
    }
    throw error;
  }

  redirect('/signin');
}
