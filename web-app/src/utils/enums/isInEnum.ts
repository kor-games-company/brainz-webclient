import { GameType } from '@prisma/client';

const possibleGameTypeValues: Record<GameType, number> = {
  SLOTS: 1,
  TERRITORY: 2,
  QUIZ: 3,
};

export function isGameType(val: string) {
  return possibleGameTypeValues[val as GameType] !== undefined;
}
