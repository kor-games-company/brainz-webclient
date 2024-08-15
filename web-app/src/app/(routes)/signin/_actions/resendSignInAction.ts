'use server';

import { signIn } from '@/auth/auth';

export default async function resendSignInAction(prevState: any, formData: FormData) {
  return await signIn('resend', { email: formData.get('email'), redirectTo: '/' });
}
