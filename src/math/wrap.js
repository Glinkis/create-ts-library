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

  if (value < min) {
    value = max - (min - value) % range;
  } else {
    value = min + (value - min) % range;
  }

  return value;
}
