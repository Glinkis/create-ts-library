import { InteractionData } from "./InteractionData";

/**
 * Sets up the required events and listeners for a complete drag interaction.
 *
 * @param element - The element to attach the events to,
 * @param callbacks - Callbacks that are called when a dragging action occurs.
 * @param callbacks.onStart - Called when dragging starts.
 * @param callbacks.onMove - Called when dragging occurs.
 * @param callbacks.onEnd - Called when dragging stops.
 */
export function addDragInteraction(
  element: HTMLElement,
  callbacks: {
    onStart: (event: Event, data: InteractionData) => void;
    onMove: (event: Event, data: InteractionData) => void;
    onEnd: (event: Event, data: InteractionData) => void;
  }
) {
  const data = new InteractionData(element);

  function start(event: Event, x: number, y: number) {
    data.start(x, y);
    if (typeof callbacks.onStart === "function") {
      callbacks.onStart(event, data);
    }
  }

  function update(event: Event, x: number, y: number) {
    data.update(x, y);
    if (typeof callbacks.onMove === "function") {
      callbacks.onMove(event, data);
    }
  }

  function end(event: Event, x: number, y: number) {
    data.end(x, y);
    if (typeof callbacks.onEnd === "function") {
      callbacks.onEnd(event, data);
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

  element.addEventListener("mousedown", onMouseDown);
  element.addEventListener("touchstart", onTouchStart);
}
