/** @module event */

/**
 * Returns relative distance beteen two events.
 *
 * @param event0 - The first event.
 * @param event1 - The second event.
 */
export function relativeDistance(
  event0: { pageX: number; pageY: number },
  event1: { pageX: number; pageY: number }
): { x: number; y: number } {
  const x = event1.pageX - event0.pageX;
  const y = event1.pageY - event0.pageY;
  return { x, y };
}
