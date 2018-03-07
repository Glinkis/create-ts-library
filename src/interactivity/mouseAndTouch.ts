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

  const out = Object.freeze({
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

      element.addEventListener("mousedown", onMouseStart);
      element.addEventListener("touchstart", onTouchStart);

      isAttached = true;
      return out;
    },
    /**
     * Removes event handlers from the element.
     */
    detach() {
      if (!isAttached) {
        throw Error("Event handlers are not defined.");
      }

      element.removeEventListener("mousedown", onMouseStart);
      element.removeEventListener("touchstart", onTouchStart);

      isAttached = false;
      return out;
    },
    onStart(callback: (event: MouseEvent | TouchEvent) => void) {
      startCallbacks.push(callback);
      return out;
    },
    onMove(callback: (event: MouseEvent | TouchEvent) => void) {
      moveCallbacks.push(callback);
      return out;
    },
    onEnd(callback: (event: MouseEvent | TouchEvent) => void) {
      endCallbacks.push(callback);
      return out;
    },
    onMouseStart(callback: (event: MouseEvent) => void) {
      mouseDownCallbacks.push(callback);
      return out;
    },
    onMouseMove(callback: (event: MouseEvent) => void) {
      mouseMoveCallbacks.push(callback);
      return out;
    },
    onMouseEnd(callback: (event: MouseEvent) => void) {
      mouseUpCallbacks.push(callback);
      return out;
    },
    onTouchStart(callback: (event: TouchEvent) => void) {
      touchStartCallbacks.push(callback);
      return out;
    },
    onTouchMove(callback: (event: TouchEvent) => void) {
      touchMoveCallbacks.push(callback);
      return out;
    },
    onTouchEnd(callback: (event: TouchEvent) => void) {
      touchEndCallbacks.push(callback);
      return out;
    }
  });

  return out;

  function onMouseStart(event: MouseEvent) {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseEnd);
    triggerCallbacks([...startCallbacks, ...mouseDownCallbacks], event);
  }

  function onMouseMove(event: MouseEvent) {
    triggerCallbacks([...moveCallbacks, ...mouseMoveCallbacks], event);
  }

  function onMouseEnd(event: MouseEvent) {
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseEnd);
    triggerCallbacks([...endCallbacks, ...mouseUpCallbacks], event);
  }

  function onTouchStart(event: TouchEvent) {
    document.addEventListener("touchmove", onTouchMove);
    document.addEventListener("touchend", onTouchEnd);
    triggerCallbacks([...startCallbacks, ...touchStartCallbacks], event);
  }

  function onTouchMove(event: TouchEvent) {
    triggerCallbacks([...moveCallbacks, ...touchMoveCallbacks], event);
  }

  function onTouchEnd(event: TouchEvent) {
    document.removeEventListener("touchmove", onTouchMove);
    document.removeEventListener("touchend", onTouchEnd);
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
