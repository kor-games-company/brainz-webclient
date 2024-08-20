import { getUserOrGuest } from '@/core/infrastructure/auth/auth';
import { RedirectType, redirect } from 'next/navigation';
import { PropsWithChildren } from 'react';

export default async function AuthorizedLayout({ children }: PropsWithChildren) {
  const authResult = await getUserOrGuest();

  return authResult.isAuthorized ? children : redirect('/signin', RedirectType.replace);
}
