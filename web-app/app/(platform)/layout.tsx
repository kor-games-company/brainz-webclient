import { PropsWithChildren } from 'react';

export default function PlatformLayout({ children }: PropsWithChildren) {
  return <article className="h-full w-full bg-primary">{children}</article>;
}
