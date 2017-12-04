/**
 * Multiplies two vectors and returns the result.
 *
 * @memberof vector2
 *
 * @param vector1 - First vector.
 * @param vector2 - Second vector.
 */
export function multiply(
  vector1: { x: number; y: number },
  vector2: { x: number; y: number }
) {
  return {
    x: vector1.x * vector2.x,
    y: vector1.y * vector2.y
  };
}
