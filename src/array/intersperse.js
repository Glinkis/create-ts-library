/**
 * Return an array with the separator interspersed between
 * each element of the input array.
 *
 * @memberof array
 *
 * @param {Array<*>} array - Array to intersperse.
 * @param {*} separator - Value to insert.
 * @returns {Array}
 */
export function intersperse(array, separator) {
  if (array.length === 0) {
    return [];
  }

  return array
    .slice(1)
    .reduce((acc, val) => acc.concat([separator, val]), [array[0]]);
}
