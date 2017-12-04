/**
 * Scales a vector by a value.
 *
 * @param vector - Vector to scale.
 * @param value - Value to scale by.
 */
export function scale(vector: { x: number; y: number }, value: number) {
  return {
    x: vector.x * value,
    y: vector.y * value
  };
}
