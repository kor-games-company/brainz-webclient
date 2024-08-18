import { Textarea } from '@headlessui/react';
import React, { Ref, TextareaHTMLAttributes, forwardRef } from 'react';

type Props = TextareaHTMLAttributes<HTMLTextAreaElement>;

export function StyledTextarea({ className, ...rest }: Props, ref: Ref<HTMLTextAreaElement>) {
  return (
    <Textarea
      ref={ref}
      className={`rounded-md border border-opposite bg-white p-2 text-black disabled:bg-gray-100 disabled:text-gray-500 ${className}`}
      {...rest}
    />
  );
}

export default forwardRef(StyledTextarea);
