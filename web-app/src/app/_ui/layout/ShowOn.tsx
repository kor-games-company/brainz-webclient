import React, { PropsWithChildren } from 'react';

type Props = {
  orientation: 'vertical' | 'horizontal';
};

export default function ShowOn({ orientation, children }: PropsWithChildren<Props>) {
  return orientation === 'vertical' ? (
    <div className="xl:hidden">{children}</div>
  ) : (
    <div className="hidden xl:block">{children}</div>
  );
}
