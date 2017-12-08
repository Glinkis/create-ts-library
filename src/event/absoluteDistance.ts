/** @module events */

/**
 * Returns the absolute distance between two events.
 *
 * @param startEvent - The first event.
 * @param endEvent - The second event.
 */
export function absoluteDistance(
  event0: { pageX: number; pageY: number },
  event1: { pageX: number; pageY: number }
) {
  const distanceX = Math.abs(event0.pageX - event1.pageX);
  const distanceY = Math.abs(event0.pageY - event1.pageY);
  return Math.sqrt(distanceX * distanceX + distanceY * distanceY);
}
