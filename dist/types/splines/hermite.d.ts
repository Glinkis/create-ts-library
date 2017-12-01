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
export declare function hermite(points: any, t: any): number;
