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
   * @param {MouseEvent} event
   * @private
   */
  function onMouseStart(event) {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
    data.startX = event.clientX;
    data.startY = event.clientY;
    lastCompoundX = data.compoundX;
    lastCompoundY = data.compoundY;
    lastMoveX = data.startX;
    lastMoveY = data.startY;
    if (typeof onStart === "function") {
      onStart(event, data);
    }
  }

  /**
   * @param {TouchEvent} event
   * @private
   */
  function onTouchStart(event) {
    document.addEventListener("touchmove", onTouchMove);
    document.addEventListener("touchend", onTouchEnd);
    data.startX = event.touches[0].clientX;
    data.startY = event.touches[0].clientY;
    lastCompoundX = data.compoundX;
    lastCompoundY = data.compoundY;
    lastMoveX = data.startX;
    lastMoveY = data.startY;
    if (typeof onStart === "function") {
      onStart(event, data);
    }
  }

  /**
   * @param {MouseEvent} event
   * @private
   */
  function onMouseMove(event) {
    data.currentX = event.clientX;
    data.currentY = event.clientY;
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
   * @param {TouchEvent} event
   * @private
   */
  function onTouchMove(event) {
    data.currentX = event.touches[0].clientX;
    data.currentY = event.touches[0].clientY;
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
   * @param {MouseEvent} event
   * @private
   */
  function onMouseUp(event) {
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
    data.endX = event.clientX;
    data.endY = event.clientY;
    if (typeof onEnd === "function") {
      onEnd(event, data);
    }
  }

  /**
   * @param {TouchEvent} event
   * @private
   */
  function onTouchEnd(event) {
    document.removeEventListener("touchmove", onTouchMove);
    document.removeEventListener("touchend", onTouchEnd);
    data.endX = event.touches[0].clientX;
    data.endY = event.touches[0].clientY;
    if (typeof onEnd === "function") {
      onEnd(event, data);
    }
  }

  element.addEventListener("mousedown", onMouseStart);
  element.addEventListener("touchstart", onTouchStart);
}
