'use client';

import React from 'react';
import useLocalization from '@/app/_hooks/useLocalization';
import StyledButton from '@/app/_ui/styled/StyledButton';
import { StyledInput } from '@/app/_ui/styled/StyledInput';
import StyledTextLink from '@/app/_ui/styled/StyledTextLink';
import { Field, Fieldset, Label, Legend } from '@headlessui/react';
import { useActionState } from 'react';
import resendSignInAction from '../_actions/resendSignInAction';

export default function SignInForm() {
  const {
    dictionary: { auth: dictionary },
  } = useLocalization();

  const [_, formAction, pending] = useActionState(resendSignInAction, undefined);

  return (
    <form action={formAction}>
      <Fieldset
        className="flex flex-col items-center gap-6 rounded-md bg-primary p-8"
        disabled={pending}
      >
        <Legend className="text-xl font-bold">{dictionary.signin}</Legend>
        <div className="flex flex-col gap-8">
          <Field className="flex flex-col">
            <Label>{dictionary.email}</Label>
            <StyledInput name="email" type="email" />
          </Field>
          <StyledButton type="submit" className="flex justify-center">
            {pending ? (
              <span className="animate-pulse">Sending email...</span>
            ) : (
              <span className="uppercase">{dictionary.signin}</span>
            )}
          </StyledButton>
        </div>
        {!pending && (
          <div>
            <StyledTextLink href="/" label={dictionary.continueWithoutSigning} />
          </div>
        )}
      </Fieldset>
    </form>
  );
}
