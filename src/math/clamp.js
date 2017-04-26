/**
 * Returns a value clamped between a maximum and a minimum number.
 *
 * @memberof math
 *
 * @param {number} value - The value to clamp.
 * @param {number} min - The minimum boundary.
 * @param {number} max - The maximum boundary.
 * @returns {number}
 */
export function clamp(value, min, max) {
  value = max != null && value >= max ? max : value;
  value = min != null && value <= min ? min : value;
  return value;
}
