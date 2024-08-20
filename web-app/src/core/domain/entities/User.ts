import { Language } from '../value-objects/Language';
import { Theme } from '../value-objects/Theme';

export class User {
  private readonly id: string;
  private readonly email: string;
  private preferredLanguage: Language;
  private preferredTheme: Theme;
  private name?: string;
  private imageUrl?: string;

  constructor(
    id: string,
    email: string,
    preferredLanguage: Language,
    preferredTheme: Theme,
    name?: string,
    imageUrl?: string,
  ) {
    this.id = id;
    this.email = email;
    this.preferredLanguage = preferredLanguage;
    this.preferredTheme = preferredTheme;
    this.name = name;
    this.imageUrl = imageUrl;
  }

  getId(): string {
    return this.id;
  }

  getEmail(): string {
    return this.email;
  }

  getName(): string | undefined {
    return this.name;
  }

  getImageUrl(): string | undefined {
    return this.imageUrl;
  }

  getPreferredLanguage(): Language {
    return this.preferredLanguage;
  }

  getPreferredTheme(): Theme {
    return this.preferredTheme;
  }

  updateName(newName: string): void {
    this.name = newName;
  }

  updateImageUrl(newImageUrl: string): void {
    this.imageUrl = newImageUrl;
  }

  updateLanguage(lang: Language): void {
    this.preferredLanguage = lang;
  }

  updateTheme(theme: Theme): void {
    this.preferredTheme = theme;
  }

  equals(other: User): boolean {
    return this.id === other.id;
  }

  getDisplayName(): string {
    return this.name ?? this.email;
  }
}
