/**
 * Returns a value clamped between a maximum and a minimum number.
 *
 * @param {number} value
 * @param {number} max
 * @param {number} min
 * @returns {number}
 */
export default function clamp(value: number, min: number, max: number): number {
  value = (max != null) && value >= max ? max : value;
  value = (min != null) && value <= min ? min : value;
  return value;
}
