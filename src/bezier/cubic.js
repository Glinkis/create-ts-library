/**
 * Cubic bezier.
 *
 * @param {[number, number, number]} array - The bezier points.
 * @param {number} t - A point along the bezier. (0-1)
 * @returns {number}
 */
export function cubic(array, t) {
  const ut = 1 - t;
  const a0 = array[0] * ut + array[1] * t;
  const a1 = array[1] * ut + array[2] * t;
  return a0 * ut + a1 * t;
}
