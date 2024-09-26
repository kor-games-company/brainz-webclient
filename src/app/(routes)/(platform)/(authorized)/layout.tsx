import { getUser } from '@/core/infrastructure/auth/auth';
import { RedirectType, redirect } from 'next/navigation';
import { PropsWithChildren } from 'react';

export default async function AuthorizedLayout({ children }: PropsWithChildren) {
  const user = await getUser();

  return user.isAuthorized() ? children : redirect('/signin', RedirectType.replace);
}
