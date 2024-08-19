import {
  SlotsQuestionType,
  SlotsQuestionTypeEnum,
} from '@/core/domain/value-objects/slots-game/SlotsQuestionType';
import { SlotsQuestion } from './SlotsQuestion';

export class SlotsAudioQuestion extends SlotsQuestion {
  private videoUrl: string;

  constructor(id: string, title: string, points: number, videoUrl: string) {
    super(id, title, points);
    this.videoUrl = videoUrl;
  }

  getQuestionType(): SlotsQuestionType {
    return SlotsQuestionType.create(SlotsQuestionTypeEnum.video);
  }

  getVideoUrl(): string {
    return this.videoUrl;
  }

  updateVideoUrl(videoUrl: string): void {
    this.videoUrl = videoUrl;
  }
}
