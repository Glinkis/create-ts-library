/**
 * Calculates a point on the curve, for a given t value between 0 and 1.
 *
 * @memberof splines
 *
 * @param {number[]} points - Array of control points for the curve.
 * @param {number} t - A value between 0 and 1. 0 is the beginning of the curve, 1 is the end.
 *
 * @returns {number}
 * TODO: Write tests to confirm it works as intended.
 */
export function catmullRomValue(points, t) {
  if (points.length < 4) {
    return 0;
  }

  // TODO: Make it work with any number of points.

  return catmullRom(points[0], points[1], points[2], points[3], t);
}

function catmullRom(p1, p2, p3, p4, t) {
  const squared = t * t;
  const cubed = t * t * t;

  const f1 = -0.5 * cubed + squared - 0.5 * t;
  const f2 = 1.5 * cubed - 2.5 * squared + 1.0;
  const f3 = -1.5 * cubed + 2.0 * squared + 0.5 * t;
  const f4 = 0.5 * cubed - 0.5 * squared;

  return p1 * f1 + p2 * f2 + p3 * f3 + p4 * f4;
}

function catmullRomDerivative(p1, p2, p3, p4, t) {
  const squared = t * t;
  return p2 + 2 * p3 * t + 3 * p4 * squared;
}

console.warn("Function 'catmullRomValue' is incomplete. Use at own risk.");
