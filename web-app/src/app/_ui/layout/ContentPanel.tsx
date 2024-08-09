import clsx from 'clsx';
import React, { PropsWithChildren } from 'react';

type Props = {
  className?: string;
};

export default function ContentPanel({ children, className }: PropsWithChildren<Props>) {
  return <div className={clsx('rounded-lg bg-secondary p-4 shadow-md', className)}>{children}</div>;
}
