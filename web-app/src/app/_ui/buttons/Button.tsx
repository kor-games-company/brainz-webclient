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
          'bg-opposite hover:bg-oppositeSecondary text-primary': variant === 'solid',
          'text-opposite bg-primary hover:bg-secondary': variant === 'outlined',
        },
        className,
      )}
    >
      {children}
    </button>
  );
}

export default React.forwardRef(Button);
