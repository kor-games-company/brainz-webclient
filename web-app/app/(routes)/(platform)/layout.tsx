import { PropsWithChildren } from 'react';
import Header from './_components/Header';

export default function PlatformLayout({ children }: PropsWithChildren) {
  return (
    <article className="h-full w-full">
      <Header />
      <article>{children}</article>
    </article>
  );
}
