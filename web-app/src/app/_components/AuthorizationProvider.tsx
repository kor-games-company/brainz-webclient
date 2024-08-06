import { User } from '@prisma/client';
import React from 'react';

type AuthorizationContextType = {
  user?: Partial<User>;
  authenticate: (user: Partial<User>, accessToken: string) => void;
};

export default function AuthorizationProvider() {
  return <div>AuthorizationProvider</div>;
}

export async function authorizedFetch(accessToken: string, endpoint: string, init?: RequestInit) {
  return await fetch(endpoint, init);
}
