import { PropsWithChildren } from 'react';
import Header from './_components/large-screen/Header';
import MobileHeader from './_components/small-screen/MobileHeader';
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
      <main className="bg-primary px-8 py-8 xl:px-32">{children}</main>
    </div>
  );
}
