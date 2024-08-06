export type AuthFormError =
  | {
      email?: string[] | undefined;
      password?: string[] | undefined;
    }
  | string
  | undefined;
