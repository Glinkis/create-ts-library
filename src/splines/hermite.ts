/**
 * Calculates a point on the curve, for a given t value between 0 and 1.
 *
 * @param points - Array of control points for the curve.
 * @param t - A value between 0 and 1. 0 is the beginning of the curve, 1 is the end.
 * TODO: Write tests to confirm it works as intended.
 */
export function hermite(points: number[], t: number) {
  const squared = t * t;
  const cubed = t * squared;
  const part1 = 2.0 * cubed - 3.0 * squared + 1.0;
  const part2 = -2.0 * cubed + 3.0 * squared;
  const part3 = cubed - 2.0 * squared + t;
  const part4 = cubed - squared;

  return (
    points[0] * part1 +
    points[2] * part2 +
    points[1] * part3 +
    points[3] * part4
  );
}

console.warn("Function 'hermite' is incomplete. Use at own risk.");
