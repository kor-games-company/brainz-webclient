import { auth } from '@/auth/auth';
import React from 'react';

export default async function UserBadge() {
  const session = await auth();

  if (!session?.user) return null;

  const user = session.user;

  return (
    <div>
      <p>{user.email}</p>
    </div>
  );
}
