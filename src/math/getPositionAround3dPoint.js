/**
 * Returns a 3D position around a 3D center point.
 *
 * @memberof math
 *
 * @param {number} centerPointX - Center point position on the X-axis.
 * @param {number} centerPointY - Center point position on the Y-axis.
 * @param {number} centerPointZ - Center point position on the Z-axis.
 * @param {number} distance - Distance from the center point.
 * @param {number} vertical - Vertical radian value.
 * @param {number} horizontal - Horizontal radian value.
 *
 * @return {{x: number, y: number, z: number}}
 */
export function getPositionAround3dPoint(
  centerPointX,
  centerPointY,
  centerPointZ,
  distance,
  vertical,
  horizontal
) {
  return {
    x: centerPointX + distance * Math.cos(vertical) * Math.cos(horizontal),
    y: centerPointY + distance * Math.sin(vertical),
    z: centerPointZ + distance * Math.cos(vertical) * Math.sin(horizontal),
  };
}
