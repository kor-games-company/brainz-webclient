import { AuthErrorCode, ExternalErrorCode, ServerErrorCode } from './ErrorCode';

export const ERROR_CODES: {
  auth: {
    nonExistingUser: AuthErrorCode;
    existingUser: AuthErrorCode;
    invalidEmail: AuthErrorCode;
    invalidPassword: AuthErrorCode;
    invalidRefreshToken: AuthErrorCode;
  };
  server: { missingConfig: ServerErrorCode };
  external: { database: ExternalErrorCode };
} = {
  auth: {
    nonExistingUser: 'nonExistingUser',
    existingUser: 'existingUser',
    invalidEmail: 'invalidEmail',
    invalidPassword: 'invalidPassword',
    invalidRefreshToken: 'invalidRefreshToken',
  },
  server: { missingConfig: 'missingConfig' },
  external: { database: 'database' },
};
