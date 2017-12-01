/**
 * Calculates a point on the curve, for a given t value between 0 and 1.
 *
 * @param points - Array of control points for the curve.
 * @param t - A value between 0 and 1. 0 is the beginning of the curve, 1 is the end.
 */
export declare function bezierValue(points: number[], t: number): any;
/**
 * Calculates the curve tangent at the specified t value.
 *
 * @param points - Array of control points for the curve.
 * @param t - A value between 0 and 1. 0 is the beginning of the curve, 1 is the end.
 */
export declare function bezierDerivative(points: number[], t: number): any;
