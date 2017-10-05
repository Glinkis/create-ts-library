/**
 * Returns the distance between two vectors.
 *
 * @memberof vector2
 *
 * @param {{
 * x: number,
 * y: number
 * }} vector1 - Point1 position.
 * @param {{
 * x: number,
 * y: number
 * }} vector2 - Point2 position.
 *
 * @returns {number}
 */
export function vector2Distance(vector1, vector2) {
  const x = Math.abs(vector1.x - vector2.x);
  const y = Math.abs(vector1.y - vector2.y);

  const x2 = x ** 2;
  const y2 = y ** 2;

  return Math.sqrt(x2 + y2);
}
