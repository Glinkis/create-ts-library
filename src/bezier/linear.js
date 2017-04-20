/**
 * Linear bezier.
 *
 * @param {[number, number]} array
 * @param {number} t
 * @returns {number}
 */
export function linear(array, t) {
  return array[0] + ((array[1] - array[0]) * t);
}
