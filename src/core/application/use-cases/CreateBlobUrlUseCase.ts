import { BlobLocation, BlobLocationTypeEnum } from '@/core/domain/value-objects/BlobLocation';
import { Result } from '@/shared/utils/types/Result';

type CreateBlobUrlUseCaseInput = {
  blobLocation: BlobLocation;
};

export class CreateBlobUrlUseCase {
  async execute({ blobLocation }: CreateBlobUrlUseCaseInput): Promise<Result<string, string>> {
    switch (blobLocation.getType()) {
      case BlobLocationTypeEnum.assets:
        return Result.ok(blobLocation.getValue());
      case BlobLocationTypeEnum.external:
        return Result.err('Not implemented');
    }
  }
}
