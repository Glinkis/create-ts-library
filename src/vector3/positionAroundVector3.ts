const PRECISION = 100000000;
const roundToPrecision = (value: number) =>
  Math.round(value * PRECISION) / PRECISION;

/**
 * Returns a vector positioned around another vector.
 *
 * @param vector - Center point position.
 * @param distance - Distance from the center point.
 * @param vertical - Vertical radian value.
 * @param horizontal - Horizontal radian value.
 */
export function positionAroundVector3(
  vector: { x: number; y: number; z: number },
  distance: number,
  vertical: number,
  horizontal: number
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
