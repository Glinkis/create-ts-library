/** @module easing */

/**
 * Accelerates until halfway, then decelerates.
 *
 * @param t - [0-1]
 */
export function easeInOutQuart(t: number) {
  return t < 0.5 ? 8 * t ** 4 : 1 - 8 * (t - 1) ** 4;
}
