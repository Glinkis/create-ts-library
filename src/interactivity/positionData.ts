/** @module interactivity */ /** */

/**
 * Provides an object containing useful position data.
 *
 * @returns Object.
 */
export function positionData(element: HTMLElement) {
  const data = {
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
      data.startX = x;
      data.startY = y;

      data.previousCompoundX = data.compoundX;
      data.previousCompoundY = data.compoundY;

      data.previousX = data.startX;
      data.previousY = data.startY;
    },
    setUpdatedPosition(x: number, y: number) {
      data.currentX = x;
      data.currentY = y;

      data.relativeX = data.currentX - data.startX;
      data.relativeY = data.currentY - data.startY;

      const width = data.element.offsetWidth;
      const height = data.element.offsetHeight;

      data.transitionX = width === 0 ? 0 : data.relativeX / width;
      data.transitionY = height === 0 ? 0 : data.relativeY / height;

      data.compoundX = data.relativeX + data.previousCompoundX;
      data.compoundY = data.relativeY + data.previousCompoundY;

      data.velocityX = data.currentX - data.previousX;
      data.velocityY = data.currentY - data.previousY;

      data.previousX = data.currentX;
      data.previousY = data.currentY;
    },
    setFinalPosition(x: number, y: number) {
      data.endX = x;
      data.endY = y;
    }
  };

  return data;
}
