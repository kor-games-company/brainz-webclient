'use client';

import useLocalization from '@/app/_hooks/useLocalization';
import StyledButton from '@/app/_ui/styled/StyledButton';
import { StyledInput } from '@/app/_ui/styled/StyledInput';
import { signIn } from '@/auth/auth';
import { dictionaryByLang } from '@/localization/dictionaries/dictionaryByLang';
import { getLangFromCookies } from '@/utils/cookies/cookies.utils';
import { Button, Field, Fieldset, Input, Label, Legend } from '@headlessui/react';
import { ArrowPathIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useFormStatus } from 'react-dom';

export default function SignInFormFieldset() {
  const {
    dictionary: { auth: dictionary },
  } = useLocalization();
  const formStatus = useFormStatus();

  return (
    <Fieldset
      className="flex flex-col items-center gap-6 rounded-md bg-primary p-8"
      disabled={formStatus.pending}
    >
      <Legend className="text-xl font-bold">{dictionary.signin}</Legend>
      <div className="flex flex-col gap-8">
        <Field className="flex flex-col">
          <Label>{dictionary.email}</Label>
          <StyledInput name="email" type="email" />
        </Field>
        <StyledButton type="submit" className="flex justify-center">
          {formStatus.pending ? (
            <span className="animate-pulse">Sending email...</span>
          ) : (
            <span className="uppercase">{dictionary.signin}</span>
          )}
        </StyledButton>
      </div>
      {!formStatus.pending && (
        <div>
          <Link href={'/'}>
            <span className="text-oppositeSecondary text-sm underline hover:text-opposite">
              {dictionary.continueWithoutSigning}
            </span>
          </Link>
        </div>
      )}
    </Fieldset>
  );
}
