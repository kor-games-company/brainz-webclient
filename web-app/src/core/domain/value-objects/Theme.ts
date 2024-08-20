export enum ThemeEnum {
  dark = 'dark',
  light = 'light',
}

export class Theme {
  private readonly value: ThemeEnum;

  private constructor(value: ThemeEnum) {
    this.value = value;
  }

  static create(value: ThemeEnum): Theme {
    if (!Object.values(ThemeEnum).includes(value as ThemeEnum)) {
      throw new Error('Invalid theme code');
    }
    return new Theme(value as ThemeEnum);
  }

  getValue(): ThemeEnum {
    return this.value;
  }

  equals(other: Theme): boolean {
    return this.value === other.value;
  }
}
