import { z } from 'zod';
import { Result } from '@/shared/utils/types/Result';

export enum BlobLocationTypeEnum {
  external = 'external',
  assets = 'assets',
}

export class BlobLocation {
  private readonly type: BlobLocationTypeEnum;
  private readonly value: string;

  private constructor(type: BlobLocationTypeEnum, value: string) {
    this.type = type;
    this.value = value;
  }

  static createAssetsLocation(path: string): Result<BlobLocation, string> {
    const pathSchema = z.string().regex(/^(\/[a-zA-Z_-][a-zA-Z0-9-_])*$/);

    const validationResult = pathSchema.safeParse(path);
    if (!validationResult.success) {
      return Result.err('Invalid path: must be a valid relative URL path');
    }

    const blobLocation = new BlobLocation(BlobLocationTypeEnum.assets, path);
    return Result.ok(blobLocation);
  }

  static createExternalLocation(blobKey: string): Result<BlobLocation, string> {
    const blobKeySchema = z.string().regex(/^[a-zA-Z][a-zA-Z0-9]{31}$/);

    const validationResult = blobKeySchema.safeParse(blobKey);
    if (!validationResult.success) {
      return Result.err(
        'Invalid blob key: must be 32 characters long, starting with an alphabetical character, followed by alphanumeric characters',
      );
    }

    const blobLocation = new BlobLocation(BlobLocationTypeEnum.external, blobKey);
    return Result.ok(blobLocation);
  }

  getType() {
    return this.type;
  }

  getValue() {
    return this.value;
  }

  equals(other: BlobLocation): boolean {
    return this.type === other.type && this.value === other.value;
  }
}
