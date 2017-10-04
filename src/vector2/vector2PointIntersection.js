/**
 * Checks for intersection between two vectors.
 *
 * @memberof vector2
 *
 * @param {{
 * x: number,
 * y: number }} vector1 - First vector.
 * @param {number} size1 - First size;
 * @param {{
 * x: number,
 * y: number }} vector2 - Second vector.
 * @param {number} size2 - Second size.
 *
 * @returns {boolean}
 */
export function vector2PointIntersection(vector1, size1, vector2, size2) {
  return (
    (vector2.x - vector1.x) ** 2 + (vector1.y - vector2.y) ** 2 <=
    (size1 + size2) ** 2
  );
}
