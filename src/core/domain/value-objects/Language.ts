import { Result } from '@/shared/utils/types/Result';

export enum LanguageEnum {
  en = 'en',
  ru = 'ru',
}

export const TRANSLATION_LANGUAGES: LanguageEnum[] = [LanguageEnum.en, LanguageEnum.ru];

export const FALLBACK_LANGUAGE: LanguageEnum = LanguageEnum.en;

export class Language {
  private readonly value: LanguageEnum;

  private constructor(value: LanguageEnum) {
    this.value = value;
  }

  static create(value: LanguageEnum): Result<Language, string> {
    if (!Object.values(LanguageEnum).includes(value as LanguageEnum)) {
      return Result.err('Invalid enum value');
    }
    return Result.ok(new Language(value as LanguageEnum));
  }

  getValue(): LanguageEnum {
    return this.value;
  }

  equals(other: Language): boolean {
    return this.value === other.value;
  }
}
