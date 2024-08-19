import { auth } from '@/infrastructure/auth/auth';
import { RedirectType, redirect } from 'next/navigation';
import React, { PropsWithChildren } from 'react';

export default async function AuthLayout({ children }: PropsWithChildren) {
  const session = await auth();

  return session?.user ? (
    redirect('/', RedirectType.replace)
  ) : (
    <article className="flex h-full w-full items-center justify-center bg-gradient-to-br from-accent/5 to-accent/90">
      {children}
    </article>
  );
}
