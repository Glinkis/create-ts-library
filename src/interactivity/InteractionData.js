/**
 * Class representing the data for an interaction event.
 * @private
 */
export class InteractionData {
  /** @type {Element} */
  element;
  /** @type {number} */
  startX = 0;
  /** @type {number} */
  startY = 0;
  /** @type {number} */
  currentX = 0;
  /** @type {number} */
  currentY = 0;
  /** @type {number} */
  relativeX = 0;
  /** @type {number} */
  relativeY = 0;
  /** @type {number} */
  transitionX = 0;
  /** @type {number} */
  transitionY = 0;
  /** @type {number} */
  compoundX = 0;
  /** @type {number} */
  compoundY = 0;
  /** @type {number} */
  endX = 0;
  /** @type {number} */
  endY = 0;

  /** @param {Element} element */
  constructor(element) {
    this.element = element;
  }

  setRelative() {
    this.relativeX = this.currentX - this.startX;
    this.relativeY = this.currentY - this.startY;
  }

  setTransition() {
    this.transitionX = -(this.relativeX / this.element.offsetWidth);
    this.transitionY = -(this.relativeY / this.element.offsetHeight);
  }
}
