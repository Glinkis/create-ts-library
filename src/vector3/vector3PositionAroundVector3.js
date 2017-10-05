const PRECISION = 100000000;
const roundToPrecision = value => Math.round(value * PRECISION) / PRECISION;

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
 * @returns {{
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
  const xAxis = roundToPrecision(Math.cos(vertical) * Math.cos(horizontal));
  const yAxis = roundToPrecision(Math.sin(vertical));
  const zAxis = roundToPrecision(Math.cos(vertical) * Math.sin(horizontal));

  return {
    x: vector.x + distance * xAxis,
    y: vector.y + distance * yAxis,
    z: vector.z + distance * zAxis
  };
}
