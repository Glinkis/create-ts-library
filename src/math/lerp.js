/**
 * Linear interpolation.
 *
 * @memberof math
 *
 * @param {number} start - Start value;
 * @param {number} end - End value.
 * @param {number} t -  A value in the set [0, 1].
 * @returns {number}
 */
export function lerp(start, end, t) {
  return start + (end - start) * t;
}
