/**
 * Returns the distance between two 2D points as a number.
 *
 * @memberof vector2
 *
 * @param {number} p1x - Point1 position on the X-axis.
 * @param {number} p1y - Point1 position on the Y-axis.
 *
 * @param {number} p2x - Point2 position on the X-axis.
 * @param {number} p2y - Point2 position on the Y-axis.
 *
 * @return {number}
 */
export function distanceBetween2DPoints(p1x, p1y, p2x, p2y) {
  const x = Math.abs(p1x - p2x);
  const y = Math.abs(p1y - p2y);

  return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
}
