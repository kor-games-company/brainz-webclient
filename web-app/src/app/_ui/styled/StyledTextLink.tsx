import Link from 'next/link';
import React from 'react';

type Props = {
  href: string;
  label: string;
};

export default function StyledTextLink({ href, label }: Props) {
  return (
    <Link href={href}>
      <span className="text-oppositeSecondary text-sm underline hover:text-opposite">{label}</span>
    </Link>
  );
}
