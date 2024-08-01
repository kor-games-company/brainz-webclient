import { RedirectType, redirect } from 'next/navigation';
import React, { PropsWithChildren } from 'react';

export default async function AuthLayout({ children }: PropsWithChildren) {
  const session = { user: 'lala' };

  return session?.user ? redirect('/', RedirectType.replace) : <article>{children}</article>;
}
