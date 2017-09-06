/**
 * Sets up the required events and listeners for a complete drag interaction.
 *
 * @memberof interactivity
 */
export class DragInteraction {
  /** @type {number} */ startX;
  /** @type {number} */ startY;
  /** @type {number} */ currentX;
  /** @type {number} */ currentY;
  /** @type {number} */ relativeX;
  /** @type {number} */ relativeY;
  /** @type {number} */ transitionX;
  /** @type {number} */ transitionY;
  /** @type {number} */ endX;
  /** @type {number} */ endY;

  /**
   * @param {HTMLElement} element
   * @param {callbacks} callbacks
   */
  constructor(element, callbacks) {
    const { onStart, onMove, onEnd } = callbacks;

    /** @param {MouseEvent} event */
    const onMouseStart = event => {
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
      this.startX = event.clientX;
      this.startY = event.clientY;
      if (typeof onStart === "function") {
        onStart(this);
      }
    };

    /** @param {TouchEvent} event */
    const onTouchStart = event => {
      document.addEventListener("touchmove", onTouchMove);
      document.addEventListener("touchend", onTouchEnd);
      this.startX = event.touches[0].clientX;
      this.startY = event.touches[0].clientY;
      if (typeof onStart === "function") {
        onStart(this);
      }
    };

    /** @param {MouseEvent} event */
    const onMouseMove = event => {
      this.currentX = event.clientX;
      this.currentY = event.clientY;
      this.setValues();
      if (typeof onMove === "function") {
        onMove(this);
      }
    };

    /** @param {TouchEvent} event */
    const onTouchMove = event => {
      this.currentX = event.touches[0].clientX;
      this.currentY = event.touches[0].clientY;
      this.setValues();
      if (typeof onMove === "function") {
        onMove(this);
      }
    };

    /** @param {MouseEvent} event */
    const onMouseUp = event => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
      this.endX = event.clientX;
      this.endY = event.clientY;
      if (typeof onEnd === "function") {
        onEnd(this);
      }
    };

    /** @param {TouchEvent} event */
    const onTouchEnd = event => {
      document.removeEventListener("touchmove", onTouchMove);
      document.removeEventListener("touchend", onTouchEnd);
      this.endX = event.touches[0].clientX;
      this.endY = event.touches[0].clientY;
      if (typeof onEnd === "function") {
        onEnd(this);
      }
    };

    element.addEventListener("mousedown", onMouseStart);
    element.addEventListener("touchstart", onTouchStart);
  }

  setValues() {
    this.setRelativePosition();
    this.setTransition();
  }

  setRelativePosition() {
    this.relativeX = this.startX - this.currentX;
    this.relativeY = this.startY - this.currentY;
  }

  setTransition() {
    this.transitionX = -(this.relativeX / element.offsetWidth);
    this.transitionY = -(this.relativeY / element.offsetHeight);
  }
}

/**
 * @typedef {object} callbacks
 * @property {dragInteractionCallback} onStart
 * @property {dragInteractionCallback} onMove
 * @property {dragInteractionCallback} onEnd
 */

/**
 * @callback dragInteractionCallback
 * @param {DragInteraction} data
 */
