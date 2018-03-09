/** @module array */

/**
 * Returns the closest number out of an array.
 *
 * @param array - The array to search in.
 * @param num - The number to search for the closest to.
 *
 * @example
 * ```js
 *
 * // Returns 10
 * getClosestNumber([0, 10, 20], 12);
 * ```
 */
export function closestNumber(array: number[], num: number) {
  return array.reduce((previous, current) => {
    return Math.abs(current - num) < Math.abs(previous - num)
      ? current
      : previous;
  });
}
