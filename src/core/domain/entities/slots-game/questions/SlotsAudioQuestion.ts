import {
  SlotsQuestionType,
  SlotsQuestionTypeEnum,
} from '@/core/domain/value-objects/game/SlotsQuestionType';
import { SlotsQuestion } from './SlotsQuestion';

export class SlotsAudioQuestion extends SlotsQuestion {
  private audioUrl: string;
  private readonly type: SlotsQuestionType;

  constructor(id: string, title: string, points: number, audioUrl: string) {
    super(id, title, points);
    this.audioUrl = audioUrl;
    this.type = SlotsQuestionType.create(SlotsQuestionTypeEnum.audio).unwrap();
  }

  getQuestionType(): SlotsQuestionType {
    return this.type;
  }

  getAudioUrl(): string {
    return this.audioUrl;
  }

  updateAudioUrl(audioUrl: string): void {
    this.audioUrl = audioUrl;
  }
}
