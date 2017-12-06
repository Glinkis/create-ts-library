/** @module math */

/**
 * @param min
 * @param value
 */
export function clampMin(min: number | null | undefined, value: number) {
  if (min != null && value <= min) {
    return min;
  }
  return value;
}
