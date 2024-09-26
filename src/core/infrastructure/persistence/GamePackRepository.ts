import { PrismaClient } from '@prisma/client';
import { IGamePackRepository } from '../../domain/repositories/IGamePackRepository';
import { GamePack } from '@/core/domain/entities/GamePack';

export class GamePackRepository implements IGamePackRepository {
  private readonly prisma: PrismaClient;
  private readonly userId: string;

  constructor(prisma: PrismaClient, userId: string) {
    this.prisma = prisma;
    this.userId = userId;
  }

  async findById(_: string): Promise<GamePack | null> {
    throw new Error('Not implemented');
  }

  async save(_: GamePack): Promise<void> {
    throw new Error('Not implemented');
    // await this.prisma.dbGamePack.upsert({
    //   where: {
    //     id: slotsPack.getId(),
    //   },
    //   update: {},
    //   create: {},
    // });
  }

  async delete(id: string): Promise<void> {
    await this.prisma.dbGamePack.delete({
      where: { id: id },
    });
  }
}
