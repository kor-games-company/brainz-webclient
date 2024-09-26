import {
  SlotsQuestionType,
  SlotsQuestionTypeEnum,
} from '@/core/domain/value-objects/game/SlotsQuestionType';
import { SlotsQuestion } from './SlotsQuestion';

export class SlotsAudioQuestion extends SlotsQuestion {
  private videoUrl: string;
  private readonly type: SlotsQuestionType;

  constructor(id: string, title: string, points: number, videoUrl: string) {
    super(id, title, points);
    this.videoUrl = videoUrl;
    this.type = SlotsQuestionType.create(SlotsQuestionTypeEnum.video).unwrap();
  }

  getQuestionType(): SlotsQuestionType {
    return this.type;
  }

  getVideoUrl(): string {
    return this.videoUrl;
  }

  updateVideoUrl(videoUrl: string): void {
    this.videoUrl = videoUrl;
  }
}
