/**
 * @typedef {object} Vector3
 * @property {number} x
 * @property {number} y
 * @property {number} z
 */

/**
 * Sets the position of a 3d point around another 3d point.
 *
 * @param {Vector3} pointA
 * @param {Vector3} pointB
 * @param {number} distance
 * @param {number} vertical - Vertical radian value.
 * @param {number} horizontal - Horizontal radian value.
 */
export function rotate3DPointAround3DPoint(
  pointA,
  pointB,
  distance,
  vertical,
  horizontal
) {
  pointA.x = pointB.x + distance * Math.cos(vertical) * Math.cos(horizontal);
  pointA.y = pointB.y + distance * Math.sin(vertical);
  pointA.z = pointB.z + distance * Math.cos(vertical) * Math.sin(horizontal);
}
