/** @module interactivity */ /** */

/**
 * Provides an object containing useful position data.
 *
 * @returns Object.
 */
export function positionData(element: HTMLElement) {
  return {
    element,
    startX: 0,
    startY: 0,
    currentX: 0,
    currentY: 0,
    previousX: 0,
    previousY: 0,
    relativeX: 0,
    relativeY: 0,
    transitionX: 0,
    transitionY: 0,
    compoundX: 0,
    compoundY: 0,
    previousCompoundX: 0,
    previousCompoundY: 0,
    endX: 0,
    endY: 0,
    velocityX: 0,
    velocityY: 0,
    setInitialPosition(x: number, y: number) {
      this.startX = x;
      this.startY = y;

      this.previousCompoundX = this.compoundX;
      this.previousCompoundY = this.compoundY;

      this.previousX = this.startX;
      this.previousY = this.startY;
    },
    setUpdatedPosition(x: number, y: number) {
      this.currentX = x;
      this.currentY = y;

      this.relativeX = this.currentX - this.startX;
      this.relativeY = this.currentY - this.startY;

      const width = this.element.offsetWidth;
      const height = this.element.offsetHeight;

      this.transitionX = width === 0 ? 0 : this.relativeX / width;
      this.transitionY = height === 0 ? 0 : this.relativeY / height;

      this.compoundX = this.relativeX + this.previousCompoundX;
      this.compoundY = this.relativeY + this.previousCompoundY;

      this.velocityX = this.currentX - this.previousX;
      this.velocityY = this.currentY - this.previousY;

      this.previousX = this.currentX;
      this.previousY = this.currentY;
    },
    setFinalPosition(x: number, y: number) {
      this.endX = x;
      this.endY = y;
    }
  };
}
