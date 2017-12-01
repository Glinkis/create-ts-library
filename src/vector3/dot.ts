/**
 * Returns the dot product of two vectors.
 *
 * @param vector1 - First vector.
 * @param vector2 - Second vector.
 */
export function dot(
  vector1: { x: number; y: number; z: number },
  vector2: { x: number; y: number; z: number }
) {
  return vector1.x * vector2.x + vector1.y * vector2.y + vector1.z * vector2.z;
}
