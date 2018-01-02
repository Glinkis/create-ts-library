/** @module misc */ /** */
export type Progress = (progress?: number) => void;

export type Executor<T> = (
  resolve: (value?: T | PromiseLike<T>) => void,
  reject: (reason?: any) => void,
  progress: Progress
) => void;

/**
 * Promise subclass with mechanism to report progress before resolving.
 */
export class ProgressPromise<T> extends Promise<T> {
  private listeners: Progress[] = [];

  public constructor(executor: Executor<T>) {
    super((resolve, reject) => {
      const progress = (value?: number) => {
        try {
          return this.listeners.forEach((listener: Progress) =>
            listener(value)
          );
        } catch (error) {
          reject(error);
        }
      };
      executor(resolve, reject, progress);
    });
  }

  public progress(onprogress: Progress) {
    this.listeners.push(onprogress);
    return this;
  }
}
