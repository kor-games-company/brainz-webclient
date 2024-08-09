import { GamePack } from '@prisma/client';
import React from 'react';

type Props = {
  pack: GamePack;
};

export default function UserPackCard({ pack }: Props) {
  return <div>UserPackCard</div>;
}
