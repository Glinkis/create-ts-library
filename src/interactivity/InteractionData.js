/**
 * Class representing the data for an interaction event.
 * @private
 */
export class InteractionData {
  /** @param {HTMLElement} element */
  constructor(element) {
    /** @type {HTMLElement} */
    this.element = element;
    /** @type {number} */
    this.startX = 0;
    /** @type {number} */
    this.startY = 0;
    /** @type {number} */
    this.currentX = 0;
    /** @type {number} */
    this.currentY = 0;
    /** @type {number} */
    this.relativeX = 0;
    /** @type {number} */
    this.relativeY = 0;
    /** @type {number} */
    this.transitionX = 0;
    /** @type {number} */
    this.transitionY = 0;
    /** @type {number} */
    this.compoundX = 0;
    /** @type {number} */
    this.compoundY = 0;
    /** @type {number} */
    this.endX = 0;
    /** @type {number} */
    this.endY = 0;
    /** @type {number} */
    this.velocityX = 0;
    /** @type {number} */
    this.velocityY = 0;
  }

  setRelative() {
    this.relativeX = this.currentX - this.startX;
    this.relativeY = this.currentY - this.startY;
  }

  setTransition() {
    this.transitionX = this.relativeX / this.element.offsetWidth;
    this.transitionY = this.relativeY / this.element.offsetHeight;
  }
}
