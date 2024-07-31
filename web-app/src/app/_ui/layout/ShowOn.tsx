import React, { PropsWithChildren } from 'react';

type Props = {
  orientation: 'vertical' | 'horizontal';
};

export default function ShowOn({ orientation, children }: PropsWithChildren<Props>) {
  return orientation === 'vertical' ? (
    <div className="lg:hidden">{children}</div>
  ) : (
    <div className="hidden lg:block">{children}</div>
  );
}
