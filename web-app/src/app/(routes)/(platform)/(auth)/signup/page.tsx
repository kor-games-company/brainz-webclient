'use client';

import { redirect } from 'next/navigation';
import React, { useActionState } from 'react';
import { signup } from './signup.action';

export default function SignUpPage() {
  const [errors, formAction, isPending] = useActionState(signup, undefined);

  return (
    <form action={formAction} className="my-8 flex flex-col items-center rounded-md">
      <div className="flex flex-col">
        <label>Email</label>
        <input name="email" type="email" className="rounded-md bg-secondary p-2 text-opposite" />

        <label>Password</label>
        <input
          name="password"
          type="password"
          className="rounded-md bg-secondary p-2 text-opposite"
        />
      </div>
      <button>Sign Up</button>
    </form>
  );
}
