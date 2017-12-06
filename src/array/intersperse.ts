/** @module array */

/**
 * Return an array with the separator interspersed between
 * each element of the input array.
 *
 * @param array - Array to intersperse.
 * @param separator - Value to insert.
 *
 * @example
 * ```js
 *
 * intersperse(["a", "b", "c"], "x"); // => ["a", "x", "b", "x", "c"]
 * ```
 */
export function intersperse(array: any[], separator: any): any[] {
  if (array.length === 0) {
    return [];
  }

  return array
    .slice(1)
    .reduce((acc, val) => acc.concat([separator, val]), [array[0]]);
}
