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

  static create(value: SlotsQuestionTypeEnum): SlotsQuestionType {
    if (!Object.values(SlotsQuestionTypeEnum).includes(value as SlotsQuestionTypeEnum)) {
      throw new Error('Invalid game type');
    }
    return new SlotsQuestionType(value as SlotsQuestionTypeEnum);
  }

  getValue(): SlotsQuestionTypeEnum {
    return this.value;
  }

  equals(other: SlotsQuestionType): boolean {
    return this.value === other.value;
  }
}
