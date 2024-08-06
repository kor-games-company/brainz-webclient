export type Result<D, E> =
  | {
      isSuccess: false;
      error: E;
    }
  | {
      isSuccess: true;
      data: D;
    };

export function errorResult<D, E>(error: E): Result<D, E> {
  return { isSuccess: false, error };
}

export function successResult<D, E>(data: D): Result<D, E> {
  return { isSuccess: true, data };
}
