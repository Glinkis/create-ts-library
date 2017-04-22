/**
 * Return an array with the separator interspersed between
 * each element of the input array.
 *
 * @param {Array} arr
 * @param {*} sep
 * @returns {Array}
 */
export function intersperse(arr, sep) {
  if (arr.length === 0) {
    return [];
  }

  return arr
    .slice(1)
    .reduce(
      (acc, val) => {
        return acc.concat([sep, val]);
      }, [arr[0]]
    );
}

Array.prototype.intersperse = function (sep) {
  return intersperse(this, sep);
};
