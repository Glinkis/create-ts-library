/**
 * Wraps a value within a range.
 *
 * @memberof math
 *
 * @param {number} value - The value to wrap.
 * @param {number} min - The minimum boundary.
 * @param {number} max - The maximum boundary.
 * @returns {number}
 */
export function wrap(value, min, max) {
  const range = max - min;

  if (min === max) {
    return min;
  } else if (value > max) {
    value = min + (value - min);
  } else {
    value = max - (min - value);
  }

  return value % range;
}
