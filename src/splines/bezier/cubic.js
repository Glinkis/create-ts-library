import { cubicTangent } from './cubicTangent';
/**
 * Cubic bezier.
 *
 * @memberof splines.bezier
 *
 * @param {[number, number, number, number]} array - The bezier points.
 * @param {number} t - A point along the bezier. (0-1)
 * @returns {number}
 */
export function cubic(array, t) {
  const ut = 1 - t;
  const tan = cubicTangent(array, t);
  return tan[0] * ut + tan[1] * t;
}
