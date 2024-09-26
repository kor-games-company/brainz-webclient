import { GameType } from '../../value-objects/game/GameType';
import { GamePack } from '../GamePack';
import { SlotsStage } from './SlotsStage';

export class SlotsPack extends GamePack {
  private stages?: SlotsStage[];

  private constructor(id: string, createdAt: Date, gameType: GameType) {
    super(id, createdAt, gameType);
  }

  getStages() {
    return this.stages;
  }

  addStage(stage: SlotsStage): void {
    this.stages?.push(stage);
  }

  removeStage(stageId: string): void {
    this.stages = this.stages?.filter((s) => s.getId() !== stageId);
  }
}
