var PRECISION = 100000000;
var roundToPrecision = function (value) {
    return Math.round(value * PRECISION) / PRECISION;
};
/**
 * Returns a vector positioned around another vector.
 *
 * @param vector - Center point position.
 * @param distance - Distance from the center point.
 * @param radian - Radian value.
 */
export function positionAroundVector2(vector, distance, radian) {
    var xAxis = roundToPrecision(Math.cos(radian));
    var yAxis = roundToPrecision(Math.sin(radian));
    return {
        x: vector.x + distance * xAxis,
        y: vector.y + distance * yAxis
    };
}
//# sourceMappingURL=positionAroundVector2.js.map