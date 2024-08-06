import clsx from 'clsx';
import Link from 'next/link';
import React, { PropsWithChildren, Ref } from 'react';

type Props = { variant?: 'solid' | 'outlined' } & PropsWithChildren<
  React.ButtonHTMLAttributes<HTMLButtonElement>
>;

function Button(
  { variant = 'solid', children, className, ...buttonProps }: Props,
  ref: Ref<HTMLButtonElement>,
) {
  return (
    <button
      ref={ref}
      {...buttonProps}
      className={clsx(
        'rounded-md px-4 py-2 transition-colors duration-200 ease-linear',
        {
          'bg-opposite text-primary hover:bg-oppositeSecondary': variant === 'solid',
          'border border-opposite bg-transparent text-opposite hover:bg-opposite/10':
            variant === 'outlined',
        },
        className,
      )}
    >
      {children}
    </button>
  );
}

export default React.forwardRef(Button);
