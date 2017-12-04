/**
 * Scales a vector by a value.
 *
 * @param vector - Vector to scale.
 * @param value - Value to scale by.
 */
export function scale(
  vector: { x: number; y: number; z: number },
  value: number
) {
  return {
    x: vector.x * value,
    y: vector.y * value,
    z: vector.z * value
  };
}
