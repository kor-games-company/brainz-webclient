export type AuthErrorCode =
  | 'existingUser'
  | 'nonExistingUser'
  | 'invalidEmail'
  | 'invalidPassword'
  | 'invalidRefreshToken';
export type ServerErrorCode = 'missingConfig';
export type ExternalErrorCode = 'database';

export type ErrorCode = AuthErrorCode | ServerErrorCode | ExternalErrorCode;
