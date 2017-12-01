/**
 * Adds two vectors and returns the result.
 *
 * @param vector1 - First vector.
 * @param vector2 - Second vector.
 */
export function add(
  vector1: { x: number; y: number; z: number },
  vector2: { x: number; y: number; z: number }
) {
  return {
    x: vector1.x + vector2.x,
    y: vector1.y + vector2.y,
    z: vector1.z + vector2.z
  };
}
