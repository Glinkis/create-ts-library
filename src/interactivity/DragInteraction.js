/**
 * Sets up the required events and listeners for a complete drag interaction.
 *
 * @memberof interactivity
 */
export class DragInteraction {
  /** @type {number} */ startPositionX;
  /** @type {number} */ startPositionY;
  /** @type {number} */ currentPositionX;
  /** @type {number} */ currentPositionY;
  /** @type {number} */ relativePositionX;
  /** @type {number} */ relativePositionY;
  /** @type {number} */ transitionX;
  /** @type {number} */ transitionY;
  /** @type {number} */ endPositionX;
  /** @type {number} */ endPositionY;

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
      this.startPositionX = event.clientX;
      this.startPositionY = event.clientY;
      if (typeof onStart === "function") {
        onStart(this);
      }
    };

    /** @param {TouchEvent} event */
    const onTouchStart = event => {
      document.addEventListener("touchmove", onTouchMove);
      document.addEventListener("touchend", onTouchEnd);
      this.startPositionX = event.touches[0].clientX;
      this.startPositionY = event.touches[0].clientY;
      if (typeof onStart === "function") {
        onStart(this);
      }
    };

    /** @param {MouseEvent} event */
    const onMouseMove = event => {
      this.currentPositionX = event.clientX;
      this.currentPositionY = event.clientY;
      this.setRelativePosition();
      this.setTransition();
      if (typeof onMove === "function") {
        onMove(this);
      }
    };

    /** @param {TouchEvent} event */
    const onTouchMove = event => {
      this.currentPositionX = event.touches[0].clientX;
      this.currentPositionY = event.touches[0].clientY;
      this.setRelativePosition();
      this.setTransition();
      if (typeof onMove === "function") {
        onMove(this);
      }
    };

    /** @param {MouseEvent} event */
    const onMouseUp = event => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
      this.endPositionX = event.clientX;
      this.endPositionY = event.clientY;
      if (typeof onEnd === "function") {
        onEnd(this);
      }
    };

    /** @param {TouchEvent} event */
    const onTouchEnd = event => {
      document.removeEventListener("touchmove", onTouchMove);
      document.removeEventListener("touchend", onTouchEnd);
      this.endPositionX = event.touches[0].clientX;
      this.endPositionY = event.touches[0].clientY;
      if (typeof onEnd === "function") {
        onEnd(this);
      }
    };

    element.addEventListener("mousedown", onMouseStart);
    element.addEventListener("touchstart", onTouchStart);
  }

  setRelativePosition() {
    this.relativePositionX = this.startPositionX - this.currentPositionX;
    this.relativePositionY = this.startPositionY - this.currentPositionY;
  }

  setTransition() {
    this.transitionX = -(this.relativePositionX / element.offsetWidth);
    this.transitionY = -(this.relativePositionY / element.offsetHeight);
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
