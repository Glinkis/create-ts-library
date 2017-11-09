/**
 * @memberof math
 *
 * @param {number?} min
 * @param {number} value
 *
 * @returns {number}
 */
export function clampMin(min, value) {
  if (min != null && value <= min) {
    return min;
  }
  return value;
}
