'use server';

import { signIn } from '@/auth/auth';

type ResendSignInActionState = {
  errors?: {
    email?: string[];
  };
};

export default async function resendSignInAction(
  prevState: ResendSignInActionState | undefined,
  formData: FormData,
) {
  return await signIn('resend', { email: formData.get('email'), redirectTo: '/' });
}
