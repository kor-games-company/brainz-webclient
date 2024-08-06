'use client';

import useLocalization from '@/app/_hooks/useLocalization';
import { redirect, useRouter } from 'next/navigation';
import React, { FormEvent } from 'react';

export default function SignUpPage() {
  const router = useRouter();
  const {
    dictionary: { auth: dictionary },
  } = useLocalization();

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
        <label>{dictionary.email}</label>
        <input name="email" type="email" className="rounded-md bg-secondary p-2 text-opposite" />

        <label>{dictionary.password}</label>
        <input
          name="password"
          type="password"
          className="rounded-md bg-secondary p-2 text-opposite"
        />
      </div>
      <button type="submit">{dictionary.signup}</button>
    </form>
  );
}
