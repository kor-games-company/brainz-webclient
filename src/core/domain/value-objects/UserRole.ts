import { Result } from '@/shared/utils/types/Result';

export enum UserRoleEnum {
  admin = 'admin',
  moderator = 'moderator',
  user = 'user',
  guest = 'guest',
}

export const FALLBACK_ROLE = UserRoleEnum.guest;

export class UserRole {
  private readonly value: UserRoleEnum;

  private constructor(value: UserRoleEnum) {
    this.value = value;
  }

  static create(value: UserRoleEnum): Result<UserRole, string> {
    if (!Object.values(UserRoleEnum).includes(value as UserRoleEnum)) {
      return Result.err('Invalid user role');
    }
    return Result.ok(new UserRole(value as UserRoleEnum));
  }

  getValue(): UserRoleEnum {
    return this.value;
  }

  equals(other: UserRole): boolean {
    return this.value === other.value;
  }
}
