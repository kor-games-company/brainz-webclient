import { Result } from '@/shared/utils/types/Result';

export enum SlotsQuestionTypeEnum {
  text = 'text',
  image = 'image',
  audio = 'audio',
  video = 'video',
}

export class SlotsQuestionType {
  private readonly value: SlotsQuestionTypeEnum;

  private constructor(value: SlotsQuestionTypeEnum) {
    this.value = value;
  }

  static create(value: SlotsQuestionTypeEnum): Result<SlotsQuestionType, string> {
    if (!Object.values(SlotsQuestionTypeEnum).includes(value as SlotsQuestionTypeEnum)) {
      return Result.err('Invalid game type');
    }
    return Result.ok(new SlotsQuestionType(value as SlotsQuestionTypeEnum));
  }

  getValue(): SlotsQuestionTypeEnum {
    return this.value;
  }

  equals(other: SlotsQuestionType): boolean {
    return this.value === other.value;
  }
}
