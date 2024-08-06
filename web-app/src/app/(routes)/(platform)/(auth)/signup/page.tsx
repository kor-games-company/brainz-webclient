'use client';

import { redirect, useRouter } from 'next/navigation';
import React, { FormEvent } from 'react';

export default function SignUpPage() {
  const router = useRouter();
  async function handleSignUp(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = new FormData(event.currentTarget);

    const response = await fetch('/api/auth/signup', {
      method: 'POST',
      body: form,
    });

    if (response.ok) {
      const data = await response.json();

      console.log('Signup successful:', data);
      router.push('/');
    } else {
      const errorData = await response.json();

      console.error('Signup failed:', errorData);
    }
  }

  return (
    <form onSubmit={handleSignUp} className="my-8 flex flex-col items-center rounded-md">
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
      <button type="submit">Sign Up</button>
    </form>
  );
}
