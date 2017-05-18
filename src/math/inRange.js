/**
 * Checks if value is inside a range.
 *
 * @memberof math
 *
 * @param {number} value - Value to check.
 * @param {number} min - Range minimum boundary.
 * @param {number} max - Range maximum boundary.
 * @param {number?} threshold - Optional threshold value.
 * @returns {boolean}
 */
export function inRange(value, min, max, threshold = 0) {
  return value + threshold >= min && value - threshold <= max;
}
