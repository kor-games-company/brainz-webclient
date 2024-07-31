import React from 'react';

const links = [
  { href: '/library', label: 'Library' },
  { href: '/hub', label: 'Hub' },
];

export default function MobilePanel() {
  return (
    <div className="absolute bottom-0 left-0 flex h-16 w-full bg-secondary shadow-sm shadow-black/30">
      <nav></nav>
    </div>
  );
}
