import { GamePack } from '@/core/domain/packs/GamePack';
import React from 'react';

type Props = {
  pack: GamePack;
};

export default function UserPackCard({ pack: _ }: Props) {
  return <div>UserPackCard</div>;
}
