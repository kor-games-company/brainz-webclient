import {
  SlotsQuestionType,
  SlotsQuestionTypeEnum,
} from '@/core/domain/value-objects/slots-game/SlotsQuestionType';
import { SlotsQuestion } from './SlotsQuestion';

export class SlotsImageQuestion extends SlotsQuestion {
  private imageUrl: string;

  constructor(id: string, title: string, points: number, imageUrl: string) {
    super(id, title, points);
    this.imageUrl = imageUrl;
  }

  getQuestionType(): SlotsQuestionType {
    return SlotsQuestionType.create(SlotsQuestionTypeEnum.image);
  }

  getImageUrl(): string {
    return this.imageUrl;
  }

  updateImageUrl(imageUrl: string): void {
    this.imageUrl = imageUrl;
  }
}
