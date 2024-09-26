enum ResultType {
  Ok = 'Ok',
  Err = 'Err',
}

export class Result<D, E> {
  private readonly type: ResultType;
  private readonly data: D | null;
  private readonly error: E | null;

  private constructor(type: ResultType, data: D | null, error: E | null) {
    this.type = type;
    this.data = data;
    this.error = error;
  }

  static ok<D, E>(data: D): Result<D, E> {
    return new Result<D, E>(ResultType.Ok, data, null);
  }

  static err<D, E>(error: E): Result<D, E> {
    return new Result<D, E>(ResultType.Err, null, error);
  }

  isOk(): boolean {
    return this.type === ResultType.Ok;
  }

  isErr(): boolean {
    return this.type === ResultType.Err;
  }

  getValue(): D | E {
    return this.isOk() ? this.data! : this.error!;
  }

  unwrap(): D {
    if (this.isErr()) throw new Error('Error unwrapping result: ' + String(this.error!));
    return this.data!;
  }
}
