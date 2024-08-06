import { auth } from '@/auth/auth';
import React from 'react';

export default async function MobileSidebarUserBadge() {
  const session = await auth();
  if (!session?.user) return null;

  return (
    <div className="flex px-6 py-4">
      <p>{session.user.email}</p>
    </div>
  );
}
