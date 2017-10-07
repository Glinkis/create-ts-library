/**
 * Returns the negated coordinates of a vector.
 *
 * @memberof vector3
 *
 * @param {{
 * x: number,
 * y: number,
 * z: number
 * }} vector - Vector to negate.
 *
 * @returns {{
 * x: number,
 * y: number,
 * z: number
 * }}
 */
export function vector3Negate(vector) {
  return {
    x: -vector.x === -0 ? 0 : -vector.x,
    y: -vector.y === -0 ? 0 : -vector.y,
    z: -vector.z === -0 ? 0 : -vector.z
  };
}
