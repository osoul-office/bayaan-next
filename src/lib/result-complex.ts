interface AppError extends Error {
  code?: string | number;
  [key: string]: unknown;
}

export type Result<T, E = AppError> =
  | {
      readonly isSuccess: true;
      readonly isFailure: false;
      readonly value: T;
    }
  | {
      readonly isSuccess: false;
      readonly isFailure: true;
      readonly error: E;
    };

export const Result = {
  success<T>(value: T): Result<T, never> {
    return { isSuccess: true, isFailure: false, value };
  },

  failure<E = AppError>(error: E): Result<never, E> {
    return { isSuccess: false, isFailure: true, error };
  },

  async safe<T, E = AppError>(promise: Promise<T>): Promise<Result<T, E>> {
    try {
      const data = await promise;
      return { isSuccess: true, isFailure: false, value: data };
    } catch (error) {
      return {
        isSuccess: false,
        isFailure: true,
        error: (error instanceof Error
          ? error
          : new Error(String(error))) as E,
      };
    }
  },

  chain<T, E = AppError>(promise: Promise<Result<T, E>>) {
    return {
      next: <U>(
        fn: (value: T) => Promise<Result<U, E>> | Result<U, E>,
      ) => {
        const nextPromise = promise.then(
          async (res): Promise<Result<U, E>> => {
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
