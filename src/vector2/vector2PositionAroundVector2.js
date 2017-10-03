const PRECISION = 100000000;
const roundToPrecision = value => Math.round(value * PRECISION) / PRECISION;

/**
 * Returns a vector positioned around another vector.
 *
 * @memberof vector2
 *
 * @param {{
 * x: number,
 * y: number
 * }} vector - Center point position.
 * @param {number} distance - Distance from the center point.
 * @param {number} radian - Radian value.
 *
 * @return {{
 * x: number,
 * y: number
 * }}
 */
export function vector2PositionAroundVector2(
  vector,
  distance,
  radian
) {
  const xAxis = roundToPrecision(Math.cos(radian));
  const yAxis = roundToPrecision(Math.sin(radian));

  return {
    x: vector.x + distance * xAxis,
    y: vector.y + distance * yAxis,
  };
}
