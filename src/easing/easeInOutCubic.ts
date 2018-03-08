/** @module easing */

/**
 * Accelerates until halfway, then decelerates.
 *
 * @param t - [0-1]
 */
export function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t ** 3 : (t - 1) * (2 * t - 2) ** 2 + 1;
}
