import {
  SlotsQuestionType,
  SlotsQuestionTypeEnum,
} from '@/core/domain/value-objects/slots-game/SlotsQuestionType';
import { SlotsQuestion } from './SlotsQuestion';

export class SlotsAudioQuestion extends SlotsQuestion {
  private audioUrl: string;

  constructor(id: string, title: string, points: number, audioUrl: string) {
    super(id, title, points);
    this.audioUrl = audioUrl;
  }

  getQuestionType(): SlotsQuestionType {
    return SlotsQuestionType.create(SlotsQuestionTypeEnum.audio);
  }

  getAudioUrl(): string {
    return this.audioUrl;
  }

  updateAudioUrl(audioUrl: string): void {
    this.audioUrl = audioUrl;
  }
}
