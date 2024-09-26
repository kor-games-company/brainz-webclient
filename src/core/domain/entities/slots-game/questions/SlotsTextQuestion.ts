import {
  SlotsQuestionType,
  SlotsQuestionTypeEnum,
} from '@/core/domain/value-objects/game/SlotsQuestionType';
import { SlotsQuestion } from './SlotsQuestion';

export class SlotsTextQuestion extends SlotsQuestion {
  private text: string;
  private readonly type: SlotsQuestionType;

  constructor(id: string, title: string, points: number, text: string) {
    super(id, title, points);
    this.text = text;
    this.type = SlotsQuestionType.create(SlotsQuestionTypeEnum.text).unwrap();
  }

  getQuestionType(): SlotsQuestionType {
    return this.type;
  }

  getQuestion(): string {
    return this.text;
  }

  updateQuestion(newQuestion: string): void {
    this.text = newQuestion;
  }
}
