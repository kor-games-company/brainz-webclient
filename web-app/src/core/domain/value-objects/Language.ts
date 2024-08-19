export enum LanguageEnum {
  en = 'en',
  ru = 'ru',
}

export class Language {
  private readonly value: LanguageEnum;

  private constructor(value: LanguageEnum) {
    this.value = value;
  }

  static create(value: LanguageEnum): Language {
    if (!Object.values(LanguageEnum).includes(value as LanguageEnum)) {
      throw new Error('Invalid language code');
    }
    return new Language(value as LanguageEnum);
  }

  getValue(): LanguageEnum {
    return this.value;
  }

  equals(other: Language): boolean {
    return this.value === other.value;
  }
}
