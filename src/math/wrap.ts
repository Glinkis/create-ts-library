/**
 * Wraps a value within a range.
 *
 * @param value - The value to wrap.
 * @param min - The minimum boundary.
 * @param max - The maximum boundary.
 */
export function wrap(value: number, min: number, max: number) {
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
