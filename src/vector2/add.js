/**
 * Adds two vectors and returns the result.
 *
 * @memberof vector2
 *
 * @param {{ x: number, y: number }} vector1 - First vector.
 * @param {{ x: number, y: number }} vector2 - Second vector.
 *
 * @return {{ x: number, y: number }}
 */
export function add(vector1, vector2) {
  return {
    x: vector1.x + vector2.x,
    y: vector1.y + vector2.y
  };
}
