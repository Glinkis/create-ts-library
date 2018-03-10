/** @module interactivity */ /** */

/**
 * Sets up mouse and touch event handlers for an element
 * and provides methods for attaching callbacks.
 *
 * @param spec - Specification object.
 * @param spec.element - The element to attach the events to,
 * @param spec.onMouseDown - mousedown event callback.
 * @param spec.onMouseMove - mousemove event callback.
 * @param spec.onMouseUp - mouseup event callback.
 * @param spec.onTouchStart - touchstart event callback.
 * @param spec.onTouchMove - touchmove event callback.
 * @param spec.onTouchEnd - touchend event callback.
 *
 * @returns A readonly object.
 */
export function mouseAndTouch(element: HTMLElement) {
  const attach = "addEventListener";
  const detach = "removeEventListener";
  const document = window.document;

  let isAttached = false;

  const startCallbacks: Array<(event: MouseEvent | TouchEvent) => void> = [];
  const moveCallbacks: Array<(event: MouseEvent | TouchEvent) => void> = [];
  const endCallbacks: Array<(event: MouseEvent | TouchEvent) => void> = [];

  const mouseDownCallbacks: Array<(event: MouseEvent) => void> = [];
  const mouseMoveCallbacks: Array<(event: MouseEvent) => void> = [];
  const mouseUpCallbacks: Array<(event: MouseEvent) => void> = [];

  const touchStartCallbacks: Array<(event: TouchEvent) => void> = [];
  const touchMoveCallbacks: Array<(event: TouchEvent) => void> = [];
  const touchEndCallbacks: Array<(event: TouchEvent) => void> = [];

  return Object.freeze({
    /**
     * Returns a boolean telling you if the
     * events are currently attached or not.
     */
    get isAttached() {
      return isAttached;
    },
    /**
     * Adds event handlers to the element.
     */
    attach() {
      if (isAttached) {
        throw Error("Event handlers are already defined.");
      }

      element[attach]("mousedown", onMouseStart);
      element[attach]("touchstart", onTouchStart);

      isAttached = true;
      return this;
    },
    /**
     * Removes event handlers from the element.
     */
    detach() {
      if (!isAttached) {
        throw Error("Event handlers are not defined.");
      }

      element[detach]("mousedown", onMouseStart);
      element[detach]("touchstart", onTouchStart);

      isAttached = false;
      return this;
    },
    onStart(callback: (event: MouseEvent | TouchEvent) => void) {
      startCallbacks.push(callback);
      return this;
    },
    onMove(callback: (event: MouseEvent | TouchEvent) => void) {
      moveCallbacks.push(callback);
      return this;
    },
    onEnd(callback: (event: MouseEvent | TouchEvent) => void) {
      endCallbacks.push(callback);
      return this;
    },
    onMouseStart(callback: (event: MouseEvent) => void) {
      mouseDownCallbacks.push(callback);
      return this;
    },
    onMouseMove(callback: (event: MouseEvent) => void) {
      mouseMoveCallbacks.push(callback);
      return this;
    },
    onMouseEnd(callback: (event: MouseEvent) => void) {
      mouseUpCallbacks.push(callback);
      return this;
    },
    onTouchStart(callback: (event: TouchEvent) => void) {
      touchStartCallbacks.push(callback);
      return this;
    },
    onTouchMove(callback: (event: TouchEvent) => void) {
      touchMoveCallbacks.push(callback);
      return this;
    },
    onTouchEnd(callback: (event: TouchEvent) => void) {
      touchEndCallbacks.push(callback);
      return this;
    }
  });

  function onMouseStart(event: MouseEvent) {
    document[attach]("mousemove", onMouseMove);
    document[attach]("mouseup", onMouseEnd);
    triggerCallbacks([...startCallbacks, ...mouseDownCallbacks], event);
  }

  function onMouseMove(event: MouseEvent) {
    triggerCallbacks([...moveCallbacks, ...mouseMoveCallbacks], event);
  }

  function onMouseEnd(event: MouseEvent) {
    document[detach]("mousemove", onMouseMove);
    document[detach]("mouseup", onMouseEnd);
    triggerCallbacks([...endCallbacks, ...mouseUpCallbacks], event);
  }

  function onTouchStart(event: TouchEvent) {
    document[attach]("touchmove", onTouchMove);
    document[attach]("touchend", onTouchEnd);
    triggerCallbacks([...startCallbacks, ...touchStartCallbacks], event);
  }

  function onTouchMove(event: TouchEvent) {
    triggerCallbacks([...moveCallbacks, ...touchMoveCallbacks], event);
  }

  function onTouchEnd(event: TouchEvent) {
    document[detach]("touchmove", onTouchMove);
    document[detach]("touchend", onTouchEnd);
    triggerCallbacks([...endCallbacks, ...touchEndCallbacks], event);
  }
}

function triggerCallbacks<T, K>(callbacks: T[], ...args: any[]) {
  callbacks.forEach(callback => triggerCallback(callback, ...args));
}

function triggerCallback<T>(callback: T, ...args: any[]) {
  if (callback instanceof Function) {
    callback(...args);
  }
  throw TypeError("Callback is not a function.");
}
