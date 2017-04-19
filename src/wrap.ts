/**
 * Wraps a value within a range.
 *
 * @param {number} value
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
export default function wrap(value: number, min: number, max: number) {
  const range = max - min;

  if (value < min) {
    value = max - (min - value) % (range);
  } else {
    value = min + (value - min) % (range);
  }

  return value;
};
