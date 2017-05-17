import { cubic } from './bezier/cubic';
import { linear } from './bezier/linear';
import { quadratic } from './bezier/quadratic';

/**
 * Contains all bezier modules.
 *
 * @module
 * @memberof splines
 */
export { cubic, linear, quadratic };

/**
 * Bezier.
 *
 * @memberof splines.bezier
 *
 * @param {number[]} points - The bezier points.
 * @param {number} t - A point along the bezier. (0-1)
 * @returns {number}
 */
export function bezier(points, t) {
  if (t === 0) {
    return points[0];
  }

  if (t === 1) {
    return points[points.length - 1];
  }

  if (points.length === 1) {
    return points[0];
  }

  const ut = 1 - t;
  const calculatedPoints = [];

  for (let i = 1; i < points.length; i++) {
    calculatedPoints.push(points[i - 1] * ut + points[i] * t);
  }

  return bezier(calculatedPoints, t);
}

/**
 * Bezier tangent.
 *
 * @memberof splines.bezier
 *
 * @param {number[]} points - The bezier points.
 * @param {number} t - A point along the bezier. (0-1)
 * @returns {number[]}
 * TODO: This is not correct at t=0.1.
 */
export function tangent(points, t) {
  if (points.length === 1) {
    return [points[0], points[0]];
  }

  if (points.length === 2) {
    return [points[0], points[1]];
  }

  const ut = 1 - t;
  const calculatedPoints = [];

  for (let i = 1; i < points.length; i++) {
    calculatedPoints.push(points[i - 1] * ut + points[i] * t);
  }

  if (calculatedPoints.length === 2) {
    return calculatedPoints;
  }

  return tangent(calculatedPoints, t);
}
