/**
 * Returns the negated coordinated of a vector.
 *
 * @memberof vector2
 *
 * @param {{
 * x: number,
 * y: number
 * }} vector - Vector to negate.
 *
 * @returns {{
 * x: number,
 * y: number
 * }}
 */
export function vector2Negate(vector) {
  return {
    x: -vector.x === -0 ? 0 : -vector.x,
    y: -vector.y === -0 ? 0 : -vector.y
  };
}
