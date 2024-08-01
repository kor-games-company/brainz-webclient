'use client';

import React, { useActionState } from 'react';
import { signin } from './singin.action';

export default function SignInPage() {
  const [errors, formAction, isPending] = useActionState(signin, undefined);
  console.log(errors);

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
      <button>Sign In</button>
    </form>
  );
}
