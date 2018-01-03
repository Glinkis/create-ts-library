/** @module interactivity */ /** */

/**
 * Sets up the required events and listeners for a complete drag interaction.
 *
 * @param spec - Specification object.
 * @param spec.element - The element to attach the events to,
 * @param spec.onStart - Called when dragging starts.
 * @param spec.onMove - Called when dragging occurs.
 * @param spec.onEnd - Called when dragging stops.
 *
 * @returns Object containing the interaction data.
 */
export function dragInteraction(spec: {
  element: HTMLElement;
  onStart?: (event: MouseEvent | TouchEvent) => void;
  onMove?: (event: MouseEvent | TouchEvent) => void;
  onEnd?: (event: MouseEvent | TouchEvent) => void;
}) {
  const { element, onStart, onMove, onEnd } = spec;

  const data = {
    element,
    startX: 0,
    startY: 0,
    currentX: 0,
    currentY: 0,
    previousX: 0,
    previousY: 0,
    relativeX: 0,
    relativeY: 0,
    transitionX: 0,
    transitionY: 0,
    compoundX: 0,
    compoundY: 0,
    previousCompoundX: 0,
    previousCompoundY: 0,
    endX: 0,
    endY: 0,
    velocityX: 0,
    velocityY: 0,
    isAttached: false,
    /**
     * Adds event handlers to the element.
     */
    attach: () => {
      if (data.isAttached) {
        throw Error("Event handlers are already defined.");
      }

      element.addEventListener("mousedown", onMouseDown);
      element.addEventListener("touchstart", onTouchStart);

      data.isAttached = true;
    },
    /**
     * Removes event handlers from the element.
     */
    detach: () => {
      if (!data.isAttached) {
        throw Error("Event handlers are not defined.");
      }

      element.removeEventListener("mousedown", onMouseDown);
      element.removeEventListener("touchstart", onTouchStart);

      data.isAttached = false;
    }
  };

  function start(event: MouseEvent | TouchEvent, x: number, y: number) {
    data.startX = x;
    data.startY = y;

    data.previousCompoundX = data.compoundX;
    data.previousCompoundY = data.compoundY;

    data.previousX = data.startX;
    data.previousY = data.startY;

    if (typeof onStart === "function") {
      onStart(event);
    }
  }

  function update(event: MouseEvent | TouchEvent, x: number, y: number) {
    data.currentX = x;
    data.currentY = y;

    data.relativeX = data.currentX - data.startX;
    data.relativeY = data.currentY - data.startY;

    data.transitionX = data.relativeX / data.element.offsetWidth;
    data.transitionY = data.relativeY / data.element.offsetHeight;

    data.compoundX = data.relativeX + data.previousCompoundX;
    data.compoundY = data.relativeY + data.previousCompoundY;

    data.velocityX = data.currentX - data.previousX;
    data.velocityY = data.currentY - data.previousY;

    data.previousX = data.currentX;
    data.previousY = data.currentY;

    if (typeof onMove === "function") {
      onMove(event);
    }
  }

  function end(event: MouseEvent | TouchEvent, x: number, y: number) {
    data.endX = x;
    data.endY = y;

    if (typeof onEnd === "function") {
      onEnd(event);
    }
  }

  function onMouseMove(e: MouseEvent) {
    update(e, e.pageX, e.pageY);
  }

  function onMouseUp(e: MouseEvent) {
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);

    end(e, e.pageX, e.pageY);
  }

  function onMouseDown(e: MouseEvent) {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);

    start(e, e.pageX, e.pageY);
  }

  function onTouchMove(e: TouchEvent) {
    update(e, e.touches[0].pageX, e.touches[0].pageY);
  }

  function onTouchEnd(e: TouchEvent) {
    document.removeEventListener("touchmove", onTouchMove);
    document.removeEventListener("touchend", onTouchEnd);

    end(e, e.touches[0].pageX, e.touches[0].pageY);
  }

  function onTouchStart(e: TouchEvent) {
    document.addEventListener("touchmove", onTouchMove);
    document.addEventListener("touchend", onTouchEnd);

    start(e, e.touches[0].pageX, e.touches[0].pageY);
  }

  return data;
}
