import { Indie_Flower } from 'next/font/google';
import Link from 'next/link';
import React from 'react';

const font = Indie_Flower({ subsets: ['latin'], weight: '400' });

export default function Logo() {
  return (
    <Link href="/">
      <span className={`text-3xl font-bold ${font.className}`}>BrainZ</span>
    </Link>
  );
}
