/** @module interactivity */ /** */

/** @private */
const attach = "addEventListener";
/** @private */
const detach = "removeEventListener";
/** @private */
const document = window.document;

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

  const callbacks = {
    start: [] as Array<(event: MouseEvent | TouchEvent) => void>,
    move: [] as Array<(event: MouseEvent | TouchEvent) => void>,
    end: [] as Array<(event: MouseEvent | TouchEvent) => void>,

    mouseDown: [] as Array<(event: MouseEvent) => void>,
    mouseMove: [] as Array<(event: MouseEvent) => void>,
    mouseUp: [] as Array<(event: MouseEvent) => void>,

    touchStart: [] as Array<(event: TouchEvent) => void>,
    touchMove: [] as Array<(event: TouchEvent) => void>,
    touchEnd: [] as Array<(event: TouchEvent) => void>
  };

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
      callbacks.start.push(callback);
      return this;
    },
    onMove(callback: (event: MouseEvent | TouchEvent) => void) {
      callbacks.move.push(callback);
      return this;
    },
    onEnd(callback: (event: MouseEvent | TouchEvent) => void) {
      callbacks.end.push(callback);
      return this;
    },
    onMouseStart(callback: (event: MouseEvent) => void) {
      callbacks.mouseDown.push(callback);
      return this;
    },
    onMouseMove(callback: (event: MouseEvent) => void) {
      callbacks.mouseMove.push(callback);
      return this;
    },
    onMouseEnd(callback: (event: MouseEvent) => void) {
      callbacks.mouseUp.push(callback);
      return this;
    },
    onTouchStart(callback: (event: TouchEvent) => void) {
      callbacks.touchStart.push(callback);
      return this;
    },
    onTouchMove(callback: (event: TouchEvent) => void) {
      callbacks.touchMove.push(callback);
      return this;
    },
    onTouchEnd(callback: (event: TouchEvent) => void) {
      callbacks.touchEnd.push(callback);
      return this;
    }
  });

  function onMouseStart(event: MouseEvent) {
    document[attach]("mousemove", onMouseMove);
    document[attach]("mouseup", onMouseEnd);
    triggerCallbacks([...callbacks.start, ...callbacks.mouseDown], event);
  }

  function onMouseMove(event: MouseEvent) {
    triggerCallbacks([...callbacks.move, ...callbacks.mouseMove], event);
  }

  function onMouseEnd(event: MouseEvent) {
    document[detach]("mousemove", onMouseMove);
    document[detach]("mouseup", onMouseEnd);
    triggerCallbacks([...callbacks.end, ...callbacks.mouseUp], event);
  }

  function onTouchStart(event: TouchEvent) {
    document[attach]("touchmove", onTouchMove);
    document[attach]("touchend", onTouchEnd);
    triggerCallbacks([...callbacks.start, ...callbacks.touchStart], event);
  }

  function onTouchMove(event: TouchEvent) {
    triggerCallbacks([...callbacks.move, ...callbacks.touchMove], event);
  }

  function onTouchEnd(event: TouchEvent) {
    document[detach]("touchmove", onTouchMove);
    document[detach]("touchend", onTouchEnd);
    triggerCallbacks([...callbacks.end, ...callbacks.touchEnd], event);
  }
}

function triggerCallbacks<T, K>(callbacks: T[], ...args: any[]) {
  callbacks.forEach(callback => triggerCallback(callback, ...args));
}

function triggerCallback<T>(callback: T, ...args: any[]) {
  if (callback instanceof Function) {
    callback(...args);
    return;
  }
  throw TypeError("Callback is not a function.");
}
