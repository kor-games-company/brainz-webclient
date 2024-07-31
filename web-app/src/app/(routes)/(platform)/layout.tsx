import { PropsWithChildren } from 'react';
import Header from './_components/Header';
import MobilePanel from './_components/MobilePanel';
import MobileHeader from './_components/MobileHeader';
import ShowOn from '@/app/_ui/layout/ShowOn';

export default function PlatformLayout({ children }: PropsWithChildren) {
  return (
    <div className="h-full w-full">
      <ShowOn orientation="vertical">
        <MobileHeader />
      </ShowOn>
      <ShowOn orientation="horizontal">
        <Header />
      </ShowOn>
      <div>{children}</div>
      <ShowOn orientation="vertical">
        <MobilePanel />
      </ShowOn>
    </div>
  );
}
