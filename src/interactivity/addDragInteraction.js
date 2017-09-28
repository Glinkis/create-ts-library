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
  const { onStart, onMove, onEnd } = callbacks;
  const data = new InteractionData(element);
  let lastCompoundX = 0;
  let lastCompoundY = 0;
  let lastMoveX = 0;
  let lastMoveY = 0;

  /**
   * @param {MouseEvent | TouchEvent} event
   * @param {number} x
   * @param {number} y
   * @private
   */
  function start(event, x, y) {
    data.startX = x;
    data.startY = y;
    lastCompoundX = data.compoundX;
    lastCompoundY = data.compoundY;
    lastMoveX = data.startX;
    lastMoveY = data.startY;
    if (typeof onStart === "function") {
      onStart(event, data);
    }
  }

  /**
   * @param {MouseEvent | TouchEvent} event
   * @param {number} x
   * @param {number} y
   * @private
   */
  function move(event, x, y) {
    data.currentX = x;
    data.currentY = y;
    data.setRelative();
    data.setTransition();
    data.compoundX = data.relativeX + lastCompoundX;
    data.compoundY = data.relativeY + lastCompoundY;
    data.velocityX = data.currentX - lastMoveX;
    data.velocityY = data.currentY - lastMoveY;
    lastMoveX = data.currentX;
    lastMoveY = data.currentY;
    if (typeof onMove === "function") {
      onMove(event, data);
    }
  }

  /**
   * @param {MouseEvent | TouchEvent} event
   * @param {number} x
   * @param {number} y
   * @private
   */
  function end(event, x, y) {
    data.endX = x;
    data.endY = y;
    if (typeof onEnd === "function") {
      onEnd(event, data);
    }
  }

  const onMouseStart = event => start(event, event.pageX, event.pageY);

  const onTouchStart = event =>
    start(event, event.touches[0].pageX, event.touches[0].pageY);

  const onMouseMove = event => move(event, event.clientX, event.clientY);

  const onTouchMove = event =>
    move(event, event.touches[0].pageX, event.touches[0].pageY);

  const onMouseUp = event => end(event, event.pageX, event.pageY);

  const onTouchEnd = event =>
    end(event, event.touches[0].pageX, event.touches[0].pageY);

  element.addEventListener("mousedown", onMouseStart);
  element.addEventListener("touchstart", onTouchStart);
  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mouseup", onMouseUp);
  document.addEventListener("touchmove", onTouchMove);
  document.addEventListener("touchend", onTouchEnd);
}
