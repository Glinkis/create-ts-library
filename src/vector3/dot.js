/**
 * Returns the dot product of two vectors.
 *
 * @memberof vector3
 *
 * @param {{ x: number, y: number, z: number }} vector1 - First vector.
 * @param {{ x: number, y: number, z: number }} vector2 - Second vector.
 *
 * @returns {number}
 */
export function dot(vector1, vector2) {
  return vector1.x * vector2.x + vector1.y * vector2.y + vector1.z * vector2.z;
}
