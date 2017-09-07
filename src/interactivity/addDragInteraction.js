/**
 * Sets up the required events and listeners for a complete drag interaction.
 *
 * @memberof interactivity
 *
 * @param {HTMLElement} element
 * @param {dragCallbacks} callbacks
 */
export function addDragInteraction(element, callbacks) {
  const { onStart, onMove, onEnd } = callbacks;

  /** @type {dragData} */
  const data = {
    startX: 0,
    startY: 0,
    currentX: 0,
    currentY: 0,
    relativeX: 0,
    relativeY: 0,
    transitionX: 0,
    transitionY: 0,
    endX: 0,
    endY: 0
  };

  function setRelative() {
    data.relativeX = data.startX - data.currentX;
    data.relativeY = data.startY - data.currentY;
  }

  function setTransition() {
    data.transitionX = -(data.relativeX / element.offsetWidth);
    data.transitionY = -(data.relativeY / element.offsetHeight);
  }

  function setValues() {
    setRelative();
    setTransition();
  }

  /** @param {MouseEvent} event */
  function onMouseStart(event) {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
    data.startX = event.clientX;
    data.startY = event.clientY;
    if (typeof onStart === "function") {
      onStart(event, data);
    }
  }

  /** @param {TouchEvent} event */
  function onTouchStart(event) {
    document.addEventListener("touchmove", onTouchMove);
    document.addEventListener("touchend", onTouchEnd);
    data.startX = event.touches[0].clientX;
    data.startY = event.touches[0].clientY;
    if (typeof onStart === "function") {
      onStart(event, data);
    }
  }

  /** @param {MouseEvent} event */
  function onMouseMove(event) {
    data.currentX = event.clientX;
    data.currentY = event.clientY;
    setValues();
    if (typeof onMove === "function") {
      onMove(event, data);
    }
  }

  /** @param {TouchEvent} event */
  function onTouchMove(event) {
    data.currentX = event.touches[0].clientX;
    data.currentY = event.touches[0].clientY;
    setValues();
    if (typeof onMove === "function") {
      onMove(event, data);
    }
  }

  /** @param {MouseEvent} event */
  function onMouseUp(event) {
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
    data.endX = event.clientX;
    data.endY = event.clientY;
    if (typeof onEnd === "function") {
      onEnd(event, data);
    }
  }

  /** @param {TouchEvent} event */
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

/**
 * @typedef {object} dragCallbacks
 * @property {dragCallback} onStart
 * @property {dragCallback} onMove
 * @property {dragCallback} onEnd
 */

/**
 * @callback dragCallback
 * @param {MouseEvent | TouchEvent} event
 * @param {dragData} data
 */

/**
 * @typedef {object} dragData
 * @property {number} startX
 * @property {number} startY
 * @property {number} currentX
 * @property {number} currentY
 * @property {number} relativeX
 * @property {number} relativeY
 * @property {number} transitionX
 * @property {number} transitionY
 * @property {number} endX
 * @property {number} endY
 */
