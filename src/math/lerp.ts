/** @module math */

/**
 * Linear interpolation.
 *
 * @param start - Start value;
 * @param end - End value.
 * @param t -  A value in the set [0, 1].
 */
export function lerp(start: number, end: number, t: number) {
  return start + (end - start) * t;
}
