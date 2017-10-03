/**
 * Returns a value clamped between a maximum and a minimum number.
 *
 * @memberof math
 *
 * @param {number} value - The value to clamp.
 * @param {number} min - The minimum boundary.
 * @param {number} max - The maximum boundary.
 * @returns {number}
 *
 * @example
 * clamp(5, 0, 10); // Returns 5
 * @example
 * clamp(-10, 0, 10); // Returns 0
 * @example
 * clamp(20, 0, 10); // Returns 10
 */
export function clamp(value, min, max) {
  if (max != null && value >= max) {
    value = max;
  }

  if (min != null && value <= min) {
    value = min;
  }

  return value;
}
