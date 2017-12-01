/**
 * Checks for intersection between two vectors.
 *
 * @param vector1 - First vector.
 * @param size1 - First size;
 * @param vector2 - Second vector.
 * @param size2 - Second size.
 */
export function pointIntersection(vector1, size1, vector2, size2) {
    return (Math.pow((vector2.x - vector1.x), 2) + Math.pow((vector1.y - vector2.y), 2) <=
        Math.pow((size1 + size2), 2));
}
//# sourceMappingURL=pointIntersection.js.map