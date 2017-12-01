/**
 * Calculates a point on the curve, for a given t value between 0 and 1.
 *
 * @param points - Array of control points for the curve.
 * @param t - A value between 0 and 1. 0 is the beginning of the curve, 1 is the end.
 * TODO: Write tests to confirm it works as intended.
 */
export function hermite(points, t) {
    var squared = t * t;
    var cubed = t * squared;
    var part1 = 2.0 * cubed - 3.0 * squared + 1.0;
    var part2 = -2.0 * cubed + 3.0 * squared;
    var part3 = cubed - 2.0 * squared + t;
    var part4 = cubed - squared;
    return (points[0] * part1 +
        points[2] * part2 +
        points[1] * part3 +
        points[3] * part4);
}
console.warn("Function 'hermite' is incomplete. Use at own risk.");
//# sourceMappingURL=hermite.js.map