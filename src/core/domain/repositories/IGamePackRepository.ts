import { GamePack } from '../entities/GamePack';

export interface IGamePackRepository {
  findById(id: string): Promise<GamePack | null>;
  save(gamePack: GamePack): Promise<void>;
  delete(id: string): Promise<void>;
}
