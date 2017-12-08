/** @module events */

/**
 * Returns the normalized coordinates of an event position within an element [-1 to 1].
 *
 * @param element - Element to find the coordinates inside of.
 * @param event - Any event with a position.
 */
export function normalizedCoordinates(
  element: HTMLElement,
  event: { pageX: number; pageY: number }
): { x: number; y: number } {
  const left = event.pageX - element.offsetLeft;
  const top = event.pageY - element.offsetTop;

  const x = left / element.offsetWidth * 2 - 1;
  const y = (top / element.offsetHeight * 2 - 1) * -1;

  return { x, y };
}
