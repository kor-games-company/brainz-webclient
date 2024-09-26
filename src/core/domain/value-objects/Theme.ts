import { Result } from '@/shared/utils/types/Result';

export enum ThemeEnum {
  dark = 'dark',
  light = 'light',
}

// WHEN ADDING NEW THEME - DO NOT FORGET TO ADD VARS TO THE globals.css
export const SUPPORTED_THEMES: ThemeEnum[] = [ThemeEnum.dark, ThemeEnum.light];

export const FALLBACK_THEME: ThemeEnum = ThemeEnum.dark;

export class Theme {
  private readonly value: ThemeEnum;

  private constructor(value: ThemeEnum) {
    this.value = value;
  }

  static create(value: ThemeEnum): Result<Theme, string> {
    if (!Object.values(ThemeEnum).includes(value as ThemeEnum)) {
      return Result.err('Invalid theme code');
    }
    return Result.ok(new Theme(value as ThemeEnum));
  }

  getValue(): ThemeEnum {
    return this.value;
  }

  equals(other: Theme): boolean {
    return this.value === other.value;
  }
}
