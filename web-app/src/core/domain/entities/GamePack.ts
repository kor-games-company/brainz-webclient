import { GameType } from '../value-objects/GameType';
import { Language } from '../value-objects/Language';

export abstract class GamePack {
  private readonly id: string;
  private name: string;
  private description: string;
  private imageUrl?: string;
  private language: Language;
  private isPublic: boolean;
  private readonly createdAt: Date;
  private updatedAt: Date;

  constructor(
    id: string,
    name: string,
    description: string,
    language: Language,
    isPublic: boolean,
    createdAt: Date,
    updatedAt: Date,
    imageUrl?: string,
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.language = language;
    this.isPublic = isPublic;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.imageUrl = imageUrl;
  }

  abstract getGameType(): GameType;

  getId(): string {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getDescription(): string {
    return this.description;
  }

  getImageUrl(): string | undefined {
    return this.imageUrl;
  }

  getLanguage(): Language {
    return this.language;
  }

  isPackPublic(): boolean {
    return this.isPublic;
  }

  getCreatedAt(): Date {
    return this.createdAt;
  }

  getUpdatedAt(): Date {
    return this.updatedAt;
  }

  updateName(newName: string): void {
    if (!newName) {
      throw new Error('Name cannot be empty');
    }
    this.name = newName;
    this.updatedAt = new Date(); // Update the last modified date
  }

  updateDescription(newDescription: string): void {
    this.description = newDescription;
    this.updatedAt = new Date();
  }

  setVisibility(isPublic: boolean): void {
    this.isPublic = isPublic;
    this.updatedAt = new Date();
  }
}
