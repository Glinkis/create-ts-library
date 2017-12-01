/**
 * Calculates a point on the curve, for a given t value between 0 and 1.
 *
 * @param points - Array of control points for the curve.
 * @param t - A value between 0 and 1. 0 is the beginning of the curve, 1 is the end.
 * TODO: Write tests to confirm it works as intended.
 */
export declare function catmullRomValue(points: number[], t: number): number;
