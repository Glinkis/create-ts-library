/** @module misc */ /** */

/**
 * Promise subclass with progress callback.
 */
export class ProgressPromise<T, P> extends Promise<T> {
  private listeners: Array<((value?: P) => void) | undefined> = [];

  public constructor(
    executor: (
      resolve: (value?: T | PromiseLike<T>) => void,
      reject: (reason?: any) => void,
      progress: (value?: P) => void
    ) => void
  ) {
    super((resolve, reject) => {
      executor(resolve, reject, value => {
        try {
          return this.listeners.forEach(
            listener => listener && listener(value)
          );
        } catch (error) {
          reject(error);
        }
      });
    });
  }

  /**
   * Attaches a callback for the progress update of the promise.
   * @param onprogress - The callback to execute when progress is updated.
   */
  public progress(onprogress?: (value?: P) => void) {
    this.listeners.push(onprogress);
    return this;
  }
}
