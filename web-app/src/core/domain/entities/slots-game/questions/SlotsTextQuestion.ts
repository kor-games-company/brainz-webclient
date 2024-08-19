import {
  SlotsQuestionType,
  SlotsQuestionTypeEnum,
} from '@/core/domain/value-objects/slots-game/SlotsQuestionType';
import { SlotsQuestion } from './SlotsQuestion';

export class SlotsTextQuestion extends SlotsQuestion {
  private question: string;

  constructor(id: string, title: string, points: number, question: string) {
    super(id, title, points);
    this.question = question;
  }

  getQuestionType(): SlotsQuestionType {
    return SlotsQuestionType.create(SlotsQuestionTypeEnum.text);
  }

  getQuestion(): string {
    return this.question;
  }

  updateQuestion(newQuestion: string): void {
    this.question = newQuestion;
  }
}
