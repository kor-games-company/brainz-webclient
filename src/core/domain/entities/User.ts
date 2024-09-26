import 'server-only';

import { createId } from '@paralleldrive/cuid2';
import { BlobLocation } from '../value-objects/BlobLocation';
import { FALLBACK_LANGUAGE, Language, LanguageEnum } from '../value-objects/Language';
import { FALLBACK_THEME, Theme, ThemeEnum } from '../value-objects/Theme';
import { FALLBACK_ROLE, UserRole, UserRoleEnum } from '../value-objects/UserRole';
import { Result } from '@/shared/utils/types/Result';
import { z } from 'zod';

export type CreateUserConfig = {
  existingId?: string;
  name?: string;
  role?: UserRoleEnum;
  imageAssetsPath?: string;
  imageBlobKey?: string;
  preferredLanguage?: LanguageEnum;
  preferredTheme?: ThemeEnum;
};

const defaultConfig: CreateUserConfig = {
  preferredLanguage: FALLBACK_LANGUAGE,
  preferredTheme: FALLBACK_THEME,
  role: UserRoleEnum.guest,
};

export class User {
  private readonly id: string;
  private readonly email: string;
  private role: UserRole;

  private name?: string;
  private imageLocation?: BlobLocation;
  private preferredLanguage?: Language;
  private preferredTheme?: Theme;

  private constructor(id: string, email: string) {
    this.id = id;
    this.email = email;
    this.role = UserRole.create(FALLBACK_ROLE).unwrap();
  }

  static create(email: string, config: CreateUserConfig): Result<User, string> {
    const configWithDefaults = { ...defaultConfig, ...config };

    const id = configWithDefaults.existingId ?? createId();

    const user = new User(id, email);

    if (configWithDefaults.role) {
      const roleResult = user.setRole(configWithDefaults.role);
      if (roleResult.isErr()) return Result.err(roleResult.getValue() as string);
    }

    if (configWithDefaults.name) {
      const setNameResult = user.setName(configWithDefaults.name);
      if (setNameResult.isErr())
        return Result.err((setNameResult.getValue() as string[]).join('\n'));
    }

    if (configWithDefaults.preferredLanguage) {
      const result = user.setPreferredLanguage(configWithDefaults.preferredLanguage);
      if (result?.isErr()) return Result.err(result.getValue() as string);
    }

    if (configWithDefaults.preferredTheme) {
      const result = user.setPreferredTheme(configWithDefaults.preferredTheme);
      if (result?.isErr()) return Result.err(result.getValue() as string);
    }

    if (configWithDefaults.imageBlobKey) {
      const result = user.setBlobImage(configWithDefaults.imageBlobKey);
      if (result?.isErr()) return Result.err(result.getValue() as string);
    }

    if (configWithDefaults.imageAssetsPath) {
      const result = user.setAssetsImage(configWithDefaults.imageAssetsPath);
      if (result?.isErr()) return Result.err(result.getValue() as string);
    }

    return Result.ok(user);
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getName() {
    return this.name;
  }

  getRole() {
    return this.role;
  }

  getImageLocation() {
    return this.imageLocation;
  }

  getPreferredLanguage() {
    return this.preferredLanguage;
  }

  getPreferredTheme() {
    return this.preferredTheme;
  }

  setRole(role: UserRoleEnum) {
    const userRoleResult = UserRole.create(role);
    if (userRoleResult.isErr()) return Result.err(userRoleResult.getValue() as string);
    this.role = userRoleResult.getValue() as UserRole;
    return Result.ok(undefined);
  }

  setName(newName: string): Result<void, string[]> {
    const schema = z.string().min(4).max(64);
    const nameValidationResult = schema.safeParse(newName);
    if (!nameValidationResult.success) {
      return Result.err(nameValidationResult.error.flatten().formErrors);
    }
    this.name = newName;
    return Result.ok(undefined);
  }

  setAssetsImage(assetsPath: string) {
    const imageLocationResult = BlobLocation.createAssetsLocation(assetsPath);
    if (imageLocationResult.isErr()) return Result.err(imageLocationResult.getValue() as string);
    this.imageLocation = imageLocationResult.getValue() as BlobLocation;
    return Result.ok(undefined);
  }

  setBlobImage(blobKey: string) {
    const imageLocationResult = BlobLocation.createExternalLocation(blobKey);
    if (imageLocationResult.isErr()) return Result.err(imageLocationResult.getValue() as string);
    this.imageLocation = imageLocationResult.getValue() as BlobLocation;
    return Result.ok(undefined);
  }

  setPreferredLanguage(lang: LanguageEnum): Result<void, string> {
    const languageResult = Language.create(lang);
    if (languageResult.isErr()) return Result.err(languageResult.getValue() as string);
    this.preferredLanguage = languageResult.getValue() as Language;
    return Result.ok(undefined);
  }

  setPreferredTheme(theme: ThemeEnum): Result<void, string> {
    const themeResult = Theme.create(theme);
    if (themeResult.isErr()) return Result.err(themeResult.getValue() as string);
    this.preferredTheme = themeResult.getValue() as Theme;
    return Result.ok(undefined);
  }

  equals(other: User) {
    return this.id === other.id;
  }

  getDisplayName() {
    return this.name ?? this.email;
  }

  isAuthorized() {
    return this.role.getValue() !== UserRoleEnum.guest;
  }
}
