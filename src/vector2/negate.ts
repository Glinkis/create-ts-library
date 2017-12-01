/**
 * Returns the negated coordinated of a vector.
 *
 * @param vector - Vector to negate.
 */
export function negate(vector: { x: number; y: number }) {
  return {
    x: -vector.x === -0 ? 0 : -vector.x,
    y: -vector.y === -0 ? 0 : -vector.y
  };
}
