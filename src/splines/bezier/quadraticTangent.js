/**
 * Quadratic bezier tangent.
 *
 * @memberof splines.bezier
 *
 * @param {[number, number, number]} array - The bezier points.
 * @param {number} t - A point along the bezier. (0-1)
 * @returns {[number, number]}
 */
export function quadraticTangent(array, t) {
  const ut = 1 - t;
  const left = array[0] * ut + array[1] * t;
  const right = array[1] * ut + array[2] * t;
  return [left, right];
}
