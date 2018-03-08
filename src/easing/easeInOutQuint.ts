/** @module easing */

/**
 * Accelerates until halfway, then decelerates.
 *
 * @param t - [0-1]
 */
export function easeInOutQuint(t: number) {
  return t < 0.5 ? 16 * t ** 5 : 1 + 16 * (t - 1) ** 5;
}
