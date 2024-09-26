import { Result } from '@/shared/utils/types/Result';
import { BlobLocation } from '../value-objects/BlobLocation';
import { GameType } from '../value-objects/game/GameType';
import { z } from 'zod';
import { Language, LanguageEnum } from '../value-objects/Language';

export abstract class GamePack {
  private readonly id: string;
  private readonly createdAt: Date;
  private readonly gameType: GameType;

  private updatedAt?: Date;
  private name?: string;
  private description?: string;
  private imageLocation?: BlobLocation;
  private language?: Language;

  constructor(id: string, createdAt: Date, gameType: GameType) {
    this.id = id;
    this.createdAt = createdAt;
    this.gameType = gameType;
  }

  getId() {
    return this.id;
  }

  getCreatedAt() {
    return this.createdAt;
  }

  getUpdatedAt() {
    return this.updatedAt;
  }

  getGameType() {
    return this.gameType;
  }

  getName() {
    return this.name;
  }

  getDescription() {
    return this.description;
  }

  getImageLocation() {
    return this.imageLocation;
  }

  getLanguage() {
    return this.language;
  }

  protected setUpdatedAt(updatedAt: Date): Result<void, string> {
    if (this.updatedAt && this.updatedAt > updatedAt) {
      return Result.err('New update should be later than old one');
    }
    this.updatedAt = updatedAt;
    return Result.ok(undefined);
  }

  setName(newName: string): Result<void, string[]> {
    const schema = z.string().min(4).max(64);
    const nameValidationResult = schema.safeParse(newName);
    if (!nameValidationResult.success) {
      return Result.err(nameValidationResult.error.flatten().formErrors);
    }
    this.name = newName;
    this.updatedAt = new Date();
    return Result.ok(undefined);
  }

  setDescription(newDescription: string): Result<void, string[]> {
    const schema = z.string().min(4).max(1024);
    const descriptionValidationResult = schema.safeParse(newDescription);
    if (!descriptionValidationResult.success) {
      return Result.err(descriptionValidationResult.error.flatten().formErrors);
    }
    this.description = newDescription;
    this.updatedAt = new Date();
    return Result.ok(undefined);
  }

  setAssetsImage(assetsPath: string) {
    const imageLocationResult = BlobLocation.createAssetsLocation(assetsPath);
    if (imageLocationResult.isErr()) return Result.err(imageLocationResult.getValue() as string);
    this.imageLocation = imageLocationResult.getValue() as BlobLocation;
    this.updatedAt = new Date();
    return Result.ok(undefined);
  }

  setBlobImage(blobKey: string) {
    const imageLocationResult = BlobLocation.createExternalLocation(blobKey);
    if (imageLocationResult.isErr()) return Result.err(imageLocationResult.getValue() as string);
    this.imageLocation = imageLocationResult.getValue() as BlobLocation;
    this.updatedAt = new Date();
    return Result.ok(undefined);
  }

  setLanguage(lang: LanguageEnum): Result<void, string> {
    const languageResult = Language.create(lang);
    if (languageResult.isErr()) return Result.err(languageResult.getValue() as string);
    this.language = languageResult.getValue() as Language;
    return Result.ok(undefined);
  }
}
