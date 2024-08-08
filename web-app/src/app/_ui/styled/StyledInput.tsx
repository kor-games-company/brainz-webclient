import { Input } from '@headlessui/react';
import React, { InputHTMLAttributes, Ref, forwardRef } from 'react';

type Props = InputHTMLAttributes<HTMLInputElement>;

export function StyledInput({ className, ...rest }: Props, ref: Ref<HTMLInputElement>) {
  return (
    <Input
      ref={ref}
      className={`rounded-md border border-opposite bg-white p-2 text-black disabled:bg-gray-100 disabled:text-gray-500 ${className}`}
      {...rest}
    />
  );
}

export default forwardRef(StyledInput);
