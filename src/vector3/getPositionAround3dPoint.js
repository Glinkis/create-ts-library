/**
 * Returns a 3D position around a 3D center point.
 *
 * @memberof vector3
 *
 * @param {{
 * x: number,
 * y: number,
 * z: number
 * }} centerPoint - Center point position.
 * @param {number} distance - Distance from the center point.
 * @param {number} vertical - Vertical radian value.
 * @param {number} horizontal - Horizontal radian value.
 *
 * @return {{
 * x: number,
 * y: number,
 * z: number
 * }}
 */
export function getPositionAround3dPoint(
  centerPoint,
  distance,
  vertical,
  horizontal
) {
  return {
    x: centerPoint.x + distance * Math.cos(vertical) * Math.cos(horizontal),
    y: centerPoint.y + distance * Math.sin(vertical),
    z: centerPoint.z + distance * Math.cos(vertical) * Math.sin(horizontal)
  };
}
