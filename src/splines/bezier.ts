import { lerp } from "../math/lerp";

function deCasteljau(points: number[], t: number) {
  const calculatedPoints = [];

  for (let i = 1; i < points.length; i++) {
    const value = lerp(points[i - 1], points[i], t);
    calculatedPoints.push(value);
  }

  return calculatedPoints;
}

/**
 * Calculates a point on the curve, for a given t value between 0 and 1.
 *
 * @param points - Array of control points for the curve.
 * @param t - A value between 0 and 1. 0 is the beginning of the curve, 1 is the end.
 */
export function bezierValue(points: number[], t: number) {
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
 * @param points - Array of control points for the curve.
 * @param t - A value between 0 and 1. 0 is the beginning of the curve, 1 is the end.
 */
export function bezierDerivative(points: number[], t: number) {
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
