/**
 * Returns the distance between two 3D points as a number.
 *
 * @memberof vector3
 *
 * @param {number} p1x - Point1 position on the X-axis.
 * @param {number} p1y - Point1 position on the Y-axis.
 * @param {number} p1z - Point1 position on the Y-axis.
 *
 * @param {number} p2x - Point2 position on the X-axis.
 * @param {number} p2y - Point2 position on the Y-axis.
 * @param {number} p2z - Point2 position on the Y-axis.
 *
 * @return {number}
 */
export function distanceBetween3DPoints(p1x, p1y, p1z, p2x, p2y, p2z) {
  const x = Math.abs(p1x - p2x);
  const y = Math.abs(p1y - p2y);
  const z = Math.abs(p1z - p2z);

  return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2) + Math.pow(z, 2));
}
