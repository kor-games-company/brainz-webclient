import { auth } from '@/auth/auth';
import { RedirectType, redirect } from 'next/navigation';
import React, { PropsWithChildren } from 'react';

export default async function AuthLayout({ children }: PropsWithChildren) {
  const session = await auth();

  return session?.user ? redirect('/', RedirectType.replace) : children;
}
