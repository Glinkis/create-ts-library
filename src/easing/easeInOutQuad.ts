/** @module easing */

/**
 * Accelerates until halfway, then decelerates.
 *
 * @param t - [0-1]
 */
export function easeInOutQuad(t: number) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}
