import { GameType, GameTypeEnum } from '../../value-objects/GameType';
import { Language } from '../../value-objects/Language';
import { GamePack } from '../GamePack';
import { SlotsStage } from './SlotsStage';

export class SlotsPack extends GamePack {
  private stages: SlotsStage[];

  constructor(
    id: string,
    name: string,
    description: string,
    language: Language,
    isPublic: boolean,
    createdAt: Date,
    updatedAt: Date,
    stages: SlotsStage[] = [],
    imageUrl?: string,
  ) {
    super(id, name, description, language, isPublic, createdAt, updatedAt, imageUrl);
    this.stages = stages;
  }

  getGameType(): GameType {
    return GameType.create(GameTypeEnum.slots);
  }

  getStages(): SlotsStage[] {
    return this.stages;
  }

  addStage(stage: SlotsStage): void {
    this.stages.push(stage);
  }

  removeStage(stageId: string): void {
    this.stages = this.stages.filter((s) => s.getId() !== stageId);
  }
}
