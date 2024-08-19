// src/core/infrastructure/persistence/SlotsPackRepository.ts
import { PrismaClient, DbGameType, DbLanguage } from '@prisma/client';
import { ISlotsPackRepository } from '../../domain/repositories/ISlotsPackRepository';
import { GameType } from '../../domain/value-objects/GameType';
import { SlotsQuestion } from '@/core/domain/entities/slots-game/questions/SlotsQuestion';
import { SlotsPack } from '@/core/domain/entities/slots-game/SlotsPack';
import { SlotsStage } from '@/core/domain/entities/slots-game/SlotsStage';
import { SlotsTopic } from '@/core/domain/entities/slots-game/SlotsTopic';

export class SlotsPackRepository implements ISlotsPackRepository {
  private readonly prisma: PrismaClient;
  private readonly userId: string;

  constructor(prisma: PrismaClient, userId: string) {
    this.prisma = prisma;
    this.userId = userId;
  }

  async findById(id: string): Promise<SlotsPack | null> {
    throw new Error('Not implemented');
  }

  async save(slotsPack: SlotsPack): Promise<void> {
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
    await this.prisma.dbSlotsPack.delete({
      where: { packId: id },
    });
  }
}
