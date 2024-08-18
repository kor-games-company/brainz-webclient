import { auth } from '@/auth/auth';
import { RedirectType, redirect } from 'next/navigation';
import { PropsWithChildren } from 'react';

export default async function AuthorizedLayout({ children }: PropsWithChildren) {
  const session = await auth();

  return session?.user ? children : redirect('/signin', RedirectType.replace);
}
