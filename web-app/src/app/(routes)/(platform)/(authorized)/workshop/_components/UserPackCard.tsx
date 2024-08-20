import { GamePack } from '@/core/domain/entities/GamePack';
import React from 'react';

type Props = {
  pack: GamePack;
};

export default function UserPackCard({ pack: _ }: Props) {
  return <div>UserPackCard</div>;
}
