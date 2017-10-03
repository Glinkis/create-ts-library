/**
 * Returns a vector positioned around another vector.
 *
 * @memberof vector3
 *
 * @param {{
 * x: number,
 * y: number,
 * z: number
 * }} vector - Center point position.
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
export function vector3PositionAroundVector3(
  vector,
  distance,
  vertical,
  horizontal
) {
  return {
    x: vector.x + distance * Math.cos(vertical) * Math.cos(horizontal),
    y: vector.y + distance * Math.sin(vertical),
    z: vector.z + distance * Math.cos(vertical) * Math.sin(horizontal)
  };
}
