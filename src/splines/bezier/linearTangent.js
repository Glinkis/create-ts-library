/**
 * Linear bezier tangent.
 *
 * @memberof splines.bezier
 *
 * @param {[number, number]} array - The bezier points.
 * @param {number} t - A point along the bezier. (0-1)
 * @returns {[number, number]}
 */
export function linearTangent(array, t) {
  return [array[0], array[1]];
}
