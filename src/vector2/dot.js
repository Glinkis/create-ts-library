/**
 * Returns the dot product of two vectors.
 *
 * @memberof vector2
 *
 * @param {{
 * x: number,
 * y: number
 * }} vector1 - First vector.
 * @param {{
 * x: number,
 * y: number
 * }} vector2 - Second vector.
 *
 * @returns {number}
 */
export function dot(vector1, vector2) {
  return vector1.x * vector2.x + vector1.y * vector2.y;
}
