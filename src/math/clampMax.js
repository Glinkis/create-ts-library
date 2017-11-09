/**
 * @memberof math
 * 
 * @param {number?} max
 * @param {number} value
 *
 * @returns {number}
 */
export function clampMax(max, value) {
  if (max != null && value >= max) {
    return max;
  }
  return value;
}