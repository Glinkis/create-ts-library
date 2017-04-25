/**
 * Return an array with the separator interspersed between
 * each element of the input array.
 *
 * @param {Array} array
 * @param {*} separator
 * @returns {Array}
 */
export function intersperse(array, separator) {
  if (array.length === 0) {
    return [];
  }

  return array.slice(1).reduce((acc, val) => {
    return acc.concat([separator, val]);
  }, [array[0]]);
}
