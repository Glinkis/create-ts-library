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
    this.previousX = 0;
    /** @type {number} */
    this.previousY = 0;
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
    this.previousCompoundX = 0;
    /** @type {number} */
    this.previousCompoundY = 0;
    /** @type {number} */
    this.endX = 0;
    /** @type {number} */
    this.endY = 0;
    /** @type {number} */
    this.velocityX = 0;
    /** @type {number} */
    this.velocityY = 0;
  }

  /**
   * @param {number} x 
   * @param {number} y 
   */
  start(x, y) {
    this.startX = x;
    this.startY = y;
    this.previousCompoundX = this.compoundX;
    this.previousCompoundY = this.compoundY;
    this.previousX = this.startX;
    this.previousY = this.startY;
  }

  /**
   * @param {number} x 
   * @param {number} y 
  */
  update(x, y) {
    this.currentX = x;
    this.currentY = y;
    this.setRelative();
    this.setTransition();
    this.setCompound();
    this.setVelocity();
    this.previousX = this.currentX;
    this.previousY = this.currentY;
  }

  /**
   * @param {number} x 
   * @param {number} y 
  */
  end(x, y) {
    this.endX = x;
    this.endY = y;
  }

  setRelative() {
    this.relativeX = this.currentX - this.startX;
    this.relativeY = this.currentY - this.startY;
  }

  setTransition() {
    this.transitionX = this.relativeX / this.element.offsetWidth;
    this.transitionY = this.relativeY / this.element.offsetHeight;
  }

  setCompound() {
    this.compoundX = this.relativeX + this.lastCompoundX;
    this.compoundY = this.relativeY + this.lastCompoundY;
  }

  setVelocity() {
    this.velocityX = this.currentX - this.previousX;
    this.velocityY = this.currentY - this.previousY;
  }
}
