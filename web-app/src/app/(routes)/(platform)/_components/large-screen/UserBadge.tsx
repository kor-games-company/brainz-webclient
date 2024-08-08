import { auth } from '@/auth/auth';
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { PencilIcon } from '@heroicons/react/20/solid';
import React from 'react';

export default async function UserBadge() {
  const session = await auth();

  if (!session?.user) return null;

  const user = session.user;

  return (
    <Menu>
      <MenuButton>{user.email}</MenuButton>
      <MenuItems
        transition
        anchor="bottom end"
        className="w-52 origin-top-right rounded-xl border border-white/5 bg-white/5 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
      >
        <MenuItem>
          <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-[focus]:bg-white/10">
            <PencilIcon className="size-4 fill-white/30" />
            Edit
            <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">
              ⌘E
            </kbd>
          </button>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
}
