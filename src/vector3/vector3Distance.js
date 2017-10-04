/**
 * Returns the distance between two vectors.
 *
 * @memberof vector3
 *
 * @param {{
 * x: number,
 * y: number,
 * z: number
 * }} vector1 - Point1 position.
 * @param {{
 * x: number,
 * y: number,
 * z: number
 * }} vector2 - Point2 position.
 *
 * @return {number}
 */
export function vector3Distance(vector1, vector2) {
  const x = Math.abs(vector1.x - vector2.x);
  const y = Math.abs(vector1.y - vector2.y);
  const z = Math.abs(vector1.z - vector2.z);

  const x2 = x ** 2;
  const y2 = y ** 2;
  const z2 = z ** 2;

  return Math.sqrt(x2 + y2 + z2);
}
