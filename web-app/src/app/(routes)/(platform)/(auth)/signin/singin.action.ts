'use server';

import { signIn } from '@/auth/auth';
import { AuthSchema } from '@/auth/auth.schema';
import { redirect } from 'next/navigation';
import { ZodError } from 'zod';

export async function signin(
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

  signIn(parsedCreds.data);

  redirect('/');
}
