import { InteractionData } from "./InteractionData";

/**
 * Sets up the required events and listeners for a complete drag interaction.
 *
 * @memberof interactivity
 *
 * @param {HTMLElement} element - The element to attach the events to,
 * @param {object} callbacks - Callbacks that are called when a dragging action occurs.
 * @param {function(event: Event, data: InteractionData)} callbacks.onStart - Called when dragging starts.
 * @param {function(event: Event, data: InteractionData)} callbacks.onMove - Called when dragging occurs.
 * @param {function(event: Event, data: InteractionData)} callbacks.onEnd - Called when dragging stops.
 */
export function addDragInteraction(element, callbacks) {
  const data = new InteractionData(element);

  function start(event, x, y) {
    data.start(x, y);
    if (typeof callbacks.onStart === "function") {
      callbacks.onStart(event, data);
    }
  }

  function update(event, x, y) {
    data.update(x, y);
    if (typeof callbacks.onMove === "function") {
      callbacks.onMove(event, data);
    }
  }

  function end(event, x, y) {
    data.end(x, y);
    if (typeof callbacks.onEnd === "function") {
      callbacks.onEnd(event, data);
    }
  }

  const onMouseMove = e => update(e, e.pageX, e.pageY);

  const onMouseUp = e => {
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
    end(e, e.pageX, e.pageY);
  };

  const onMouseDown = e => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
    start(e, e.pageX, e.pageY);
  };

  const onTouchMove = e => update(e, e.touches[0].pageX, e.touches[0].pageY);

  const onTouchEnd = e => {
    document.removeEventListener("touchmove", onTouchMove);
    document.removeEventListener("touchend", onTouchEnd);
    end(e, e.touches[0].pageX, e.touches[0].pageY);
  };

  const onTouchStart = e => {
    document.addEventListener("touchmove", onTouchMove);
    document.addEventListener("touchend", onTouchEnd);
    start(e, e.touches[0].pageX, e.touches[0].pageY);
  };

  element.addEventListener("mousedown", onMouseDown);
  element.addEventListener("touchstart", onTouchStart);
}
