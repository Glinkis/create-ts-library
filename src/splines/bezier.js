/**
 * Bezier.
 *
 * @memberof splines
 *
 * @param {number[]} points - The bezierValue points.
 * @param {number} t - A point along the bezierValue. (0-1)
 * @returns {number}
 */
export function bezierValue(points, t) {
  if (t === 0) {
    return points[0];
  }

  if (t === 1) {
    return points[points.length - 1];
  }

  if (points.length === 1) {
    return points[0];
  }

  return bezierValue(deCasteljau(points, t), t);
}

/**
 * Bezier tangent.
 *
 * @memberof splines
 *
 * @param {number[]} points - The bezierValue points.
 * @param {number} t - A point along the bezierValue. (0-1)
 * @returns {number[]}
 */
export function bezierTangent(points, t) {
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

  return bezierTangent(deCa, t);
}

function deCasteljau(points, t) {
  const ut = 1 - t;
  const calculatedPoints = [];

  for (let i = 1; i < points.length; i++) {
    calculatedPoints.push(points[i - 1] * ut + points[i] * t);
  }

  return calculatedPoints;
}
