/**
 * Returns the closest number out of an array.
 *
 * @memberof array
 *
 * @param {Array} array - The array to search in.
 * @param {number} number - The number to search for the closest to.
 * @return {number}
 *
 * @example
 * // Returns 10
 * getClosestNumber([0, 10, 20], 12);
 */
export function getClosestNumber(array, number) {
  return array.reduce((previous, current) => {
    return Math.abs(current - number) < Math.abs(previous - number)
      ? current
      : previous;
  });
}
