import {
  SlotsQuestionType,
  SlotsQuestionTypeEnum,
} from '@/core/domain/value-objects/game/SlotsQuestionType';
import { SlotsQuestion } from './SlotsQuestion';

export class SlotsImageQuestion extends SlotsQuestion {
  private imageUrl: string;
  private readonly type: SlotsQuestionType;

  constructor(id: string, title: string, points: number, imageUrl: string) {
    super(id, title, points);
    this.imageUrl = imageUrl;
    this.type = SlotsQuestionType.create(SlotsQuestionTypeEnum.image).unwrap();
  }

  getQuestionType(): SlotsQuestionType {
    return this.type;
  }

  getImageUrl(): string {
    return this.imageUrl;
  }

  updateImageUrl(imageUrl: string): void {
    this.imageUrl = imageUrl;
  }
}
