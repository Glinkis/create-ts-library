/** @module animation.easing */

/**
 * Accelerates until halfway, then decelerates.
 *
 * @param t - [0-1]
 */
export function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
}
