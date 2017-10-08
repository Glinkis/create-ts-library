/**
 * Checks for intersection between two vectors.
 *
 * @memberof vector3
 *
 * @param {{ x: number, y: number, z: number }} vector1 - First vector.
 * @param {number} size1 - First size.
 * @param {{ x: number, y: number, z: number }} vector2 - Second vector.
 * @param {number} size2 - Second size.
 *
 * @returns {boolean}
 */
export function pointIntersection(vector1, size1, vector2, size2) {
  return (
    (vector1.x - vector2.x) ** 2 +
      (vector1.y - vector2.y) ** 2 +
      (vector1.z - vector2.z) ** 2 <=
    (size1 + size2) ** 2
  );
}
