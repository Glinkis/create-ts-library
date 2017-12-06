/** @module interactivity */

/**
 * Class representing the data for an interaction event.
 * @private
 */
export class InteractionData {
  public element: HTMLElement;
  public startX = 0;
  public startY = 0;
  public currentX = 0;
  public currentY = 0;
  public previousX = 0;
  public previousY = 0;
  public relativeX = 0;
  public relativeY = 0;
  public transitionX = 0;
  public transitionY = 0;
  public compoundX = 0;
  public compoundY = 0;
  public previousCompoundX = 0;
  public previousCompoundY = 0;
  public endX = 0;
  public endY = 0;
  public velocityX = 0;
  public velocityY = 0;

  public constructor(element: HTMLElement) {
    this.element = element;
  }

  public start(x: number, y: number) {
    this.startX = x;
    this.startY = y;
    this.previousCompoundX = this.compoundX;
    this.previousCompoundY = this.compoundY;
    this.previousX = this.startX;
    this.previousY = this.startY;
  }

  public update(x: number, y: number) {
    this.currentX = x;
    this.currentY = y;
    this.setRelative();
    this.setTransition();
    this.setCompound();
    this.setVelocity();
    this.previousX = this.currentX;
    this.previousY = this.currentY;
  }

  public end(x: number, y: number) {
    this.endX = x;
    this.endY = y;
  }

  private setRelative() {
    this.relativeX = this.currentX - this.startX;
    this.relativeY = this.currentY - this.startY;
  }

  private setTransition() {
    this.transitionX = this.relativeX / this.element.offsetWidth;
    this.transitionY = this.relativeY / this.element.offsetHeight;
  }

  private setCompound() {
    this.compoundX = this.relativeX + this.previousCompoundX;
    this.compoundY = this.relativeY + this.previousCompoundY;
  }

  private setVelocity() {
    this.velocityX = this.currentX - this.previousX;
    this.velocityY = this.currentY - this.previousY;
  }
}
