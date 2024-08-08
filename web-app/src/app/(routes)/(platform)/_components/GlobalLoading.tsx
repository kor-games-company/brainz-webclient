import React from 'react';
import { CubeTransparentIcon } from '@heroicons/react/24/outline';

export default function GlobalLoading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="flex items-center justify-center">
        <CubeTransparentIcon className="h-16 w-16 animate-pulse text-white" />
      </div>
    </div>
  );
}
