import { signIn } from '@/auth/auth';
import SignInFormFieldset from './SignInFormFieldset';

export default function SignIn() {
  return (
    <form
      action={async (formData) => {
        'use server';
        await signIn('resend', { email: formData.get('email'), redirectTo: '/' });
      }}
    >
      <SignInFormFieldset />
    </form>
  );
}
