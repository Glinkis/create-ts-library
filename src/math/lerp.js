/**
 * Linear interpolation.
 *
 * @param {number} start - Start value;
 * @param {number} end - End value.
 * @param {number} t -  A value between 0 and 1.
 * @returns {number}
 */
export function lerp(start, end, t) {
  return start + (end - start) * t;
}
