export type Result<T> =
  | {
      readonly isSuccess: true;
      readonly isFailure: false;
      readonly value: T;
    }
  | {
      readonly isSuccess: false;
      readonly isFailure: true;
      readonly error: string;
    };

export const Result = {
  success<T>(value: T): Result<T> {
    return { isSuccess: true, isFailure: false, value };
  },

  failure(error: string): Result<never> {
    return { isSuccess: false, isFailure: true, error };
  },

  async safe<T>(promise: Promise<T>): Promise<Result<T>> {
    try {
      const data = await promise;
      return { isSuccess: true, isFailure: false, value: data };
    } catch (error) {
      return {
        isSuccess: false,
        isFailure: true,
        error: error instanceof Error ? error.message : String(error),
      };
    }
  },

  chain<T>(promise: Promise<Result<T>>) {
    return {
      next: <U>(fn: (value: T) => Promise<Result<U>> | Result<U>) => {
        const nextPromise = promise.then(
          async (res): Promise<Result<U>> => {
            if (res.isFailure) return res;
            const next = fn(res.value);
            return next instanceof Promise ? await next : next;
          },
        );
        return Result.chain(nextPromise);
      },
      promise: () => promise,
    };
  },
} as const;
