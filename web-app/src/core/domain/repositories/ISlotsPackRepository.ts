import { SlotsPack } from '../entities/slots-game/SlotsPack';

export interface ISlotsPackRepository {
  findById(id: string): Promise<SlotsPack | null>;
  save(slotsPack: SlotsPack): Promise<void>;
  delete(id: string): Promise<void>;
}
