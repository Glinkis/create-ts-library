/**
 * Returns the distance between two 3D points as a number.
 *
 * @memberof vector3
 *
 * @param {{
 * x: number,
 * y: number,
 * z: number
 * }} point1 - Point1 position.
 * @param {{
 * x: number,
 * y: number,
 * z: number
 * }} point2 - Point2 position.
 *
 * @return {number}
 */
export function distanceBetween3DPoints(point1, point2) {
  const x = Math.abs(point1.x - point2.x);
  const y = Math.abs(point1.y - point2.y);
  const z = Math.abs(point1.z - point2.z);

  return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2));
}
