/**
 * Returns the distance between two 2D points as a number.
 *
 * @memberof math
 *
 * @param {number} point1x - Point1 position on the X-axis.
 * @param {number} point1y - Point1 position on the Y-axis.
 * @param {number} point2x - Point2 position on the X-axis.
 * @param {number} point2y - Point2 position on the Y-axis.
 *
 * @return {number}
 */
export function distanceBetween2DPoints(point1x, point1y, point2x, point2y) {
  const x = Math.abs(point1x - point2x);
  const y = Math.abs(point1y - point2y);

  return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
}
