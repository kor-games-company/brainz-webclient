import { Language } from '@/domain/common/Language';
import { GameType } from '@/domain/games/GameType';
import { GamePack } from '@/domain/packs/GamePack';
import { prisma } from '@/prisma';
import { DbGamePack } from '@prisma/client';

export const packsRepo = {
  async getUserPacks(userId: string): Promise<GamePack[]> {
    const packs = await prisma.dbGamePack.findMany({
      where: {
        userId,
      },
    });
    return packs.map(toDomainPack);
  },

  async createPack(
    userId: string,
    gameType: GameType,
    gamePack: Required<Pick<GamePack, 'name' | 'description' | 'imageUrl' | 'language'>>,
  ) {
    return await prisma.dbGamePack.create({
      data: {
        userId,
        gameType,
        ...gamePack,
      },
    });
  },
};

function toDomainPack(pack: DbGamePack): GamePack {
  return {
    id: pack.id,
    name: pack.name,
    description: pack.description,
    imageUrl: pack.imageUrl,
    language: pack.language as Language,
    isPublic: pack.isPublic,
    createdAt: pack.createdAt,
    updatedAt: pack.updatedAt,
  };
}
