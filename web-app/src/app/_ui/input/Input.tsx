import React, { InputHTMLAttributes, Ref, forwardRef } from 'react';

type Props = InputHTMLAttributes<HTMLInputElement>;

export function Input({ className, ...rest }: Props, ref: Ref<HTMLInputElement>) {
  return (
    <input
      ref={ref}
      className={`rounded-md border border-opposite p-2 text-primary ${className}`}
      {...rest}
    />
  );
}

export default forwardRef(Input);
