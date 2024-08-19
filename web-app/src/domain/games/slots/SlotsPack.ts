import { GamePack } from '../../packs/GamePack';
import { SlotsStage } from './SlotsStage';

export interface SlotsPack extends GamePack {
  stages?: SlotsStage[];
}
