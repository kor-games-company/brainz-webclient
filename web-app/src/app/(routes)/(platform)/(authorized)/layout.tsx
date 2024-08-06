import { RedirectType, redirect } from 'next/navigation';
import React, { PropsWithChildren } from 'react';

export default async function AuthorizedLayout({ children }: PropsWithChildren) {
  const session = { user: undefined };

  return session?.user ? children : redirect('/signin', RedirectType.replace);
}
