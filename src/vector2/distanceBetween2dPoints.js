/**
 * Returns the distance between two 2D points as a number.
 *
 * @memberof vector2
 *
 * @param {{
 * x: number,
 * y: number
 * }} point1 - Point1 position.
 * @param {{
 * x: number,
 * y: number
 * }} point2 - Point2 position.
 *
 * @return {number}
 */
export function distanceBetween2DPoints(point1, point2) {
  const x = Math.abs(point1.x - point2.x);
  const y = Math.abs(point1.y - point2.y);

  return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2));
}
