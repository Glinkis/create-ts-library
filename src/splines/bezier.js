import { lerp } from "../math/lerp";

/**
 * Calculates a point on the curve, for a given t value between 0 and 1.
 *
 * @memberof splines
 *
 * @param {number[]} points - Array of control points for the curve.
 * @param {number} t - A value between 0 and 1. 0 is the beginning of the curve, 1 is the end.
 * @returns {number}
 */
export function bezierValue(points, t) {
  if (t === 0 || points.length === 1) {
    return points[0];
  }

  if (t === 1) {
    return points[points.length - 1];
  }

  return bezierValue(deCasteljau(points, t), t);
}

/**
 * Calculates the curve tangent at the specified t value.
 *
 * @memberof splines
 *
 * @param {number[]} points - Array of control points for the curve.
 * @param {number} t - A value between 0 and 1. 0 is the beginning of the curve, 1 is the end.
 * @returns {number[]}
 */
export function bezierDerivative(points, t) {
  if (points.length === 1) {
    return [points[0], points[0]];
  }

  if (points.length === 2) {
    return [points[0], points[1]];
  }

  const deCa = deCasteljau(points, t);

  if (deCa.length === 2) {
    return deCa;
  }

  return bezierDerivative(deCa, t);
}

function deCasteljau(points, t) {
  const calculatedPoints = [];

  for (let i = 1; i < points.length; i++) {
    calculatedPoints.push(lerp(points[i - 1], points[i], t));
  }

  return calculatedPoints;
}
