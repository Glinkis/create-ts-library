/**
 * Calculates a point on the curve, for a given t value between 0 and 1.
 *
 * @memberof splines
 *
 * @param {number[]} points - Array of control points for the curve.
 * @param {number} t - A value between 0 and 1. 0 is the beginning of the curve, 1 is the end.
 *
 * @returns {number}
 */
export declare function bezierValue(points: any, t: any): any;
/**
 * Calculates the curve tangent at the specified t value.
 *
 * @memberof splines
 *
 * @param {number[]} points - Array of control points for the curve.
 * @param {number} t - A value between 0 and 1. 0 is the beginning of the curve, 1 is the end.
 *
 * @returns {number[]}
 */
export declare function bezierDerivative(points: any, t: any): any;
