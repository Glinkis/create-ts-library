/**
 * Adds two vectors and returns the result.
 *
 * @param {{
 * x: number,
 * y: number,
 * z: number
 * }} vector1 - First vector.
 * @param {{
 * x: number,
 * y: number
 * z: number
 * }} vector2 - Second vector.
 *
 * @returns {{
 * x: number,
 * y: number,
 * z: number
 * }}
 */
export function vector3Add(vector1, vector2) {
  return {
    x: vector1.x + vector2.x,
    y: vector1.y + vector2.y,
    z: vector1.z + vector2.z
  };
}
