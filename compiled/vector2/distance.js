/**
 * Returns the distance between two vectors.
 *
 * @param vector1 - Point1 position.
 * @param vector2 - Point2 position.
 */
export function distance(vector1, vector2) {
    var x = Math.pow(Math.abs(vector1.x - vector2.x), 2);
    var y = Math.pow(Math.abs(vector1.y - vector2.y), 2);
    return Math.sqrt(x + y);
}
//# sourceMappingURL=distance.js.map