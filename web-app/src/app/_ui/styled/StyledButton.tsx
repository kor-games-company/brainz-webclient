import { Button } from '@headlessui/react';
import clsx from 'clsx';
import Link from 'next/link';
import React, { PropsWithChildren, Ref } from 'react';

type Props = { variant?: 'solid' | 'outlined' } & PropsWithChildren<
  React.ButtonHTMLAttributes<HTMLButtonElement>
>;

function StyledButton(
  { variant = 'solid', children, className, ...buttonProps }: Props,
  ref: Ref<HTMLButtonElement>,
) {
  return (
    <Button
      ref={ref}
      {...buttonProps}
      className={clsx(
        'rounded-md px-4 py-2 transition-colors duration-200 ease-linear disabled:cursor-not-allowed',
        {
          'bg-opposite text-primary hover:bg-opposite-secondary disabled:hover:bg-opposite':
            variant === 'solid',
          'border border-opposite bg-transparent text-opposite hover:bg-opposite/10 disabled:hover:bg-transparent':
            variant === 'outlined',
        },
        className,
      )}
    >
      {children}
    </Button>
  );
}

export default React.forwardRef(StyledButton);
