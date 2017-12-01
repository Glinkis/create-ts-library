var PRECISION = 100000000;
var roundToPrecision = function (value) {
    return Math.round(value * PRECISION) / PRECISION;
};
/**
 * Returns a vector positioned around another vector.
 *
 * @param vector - Center point position.
 * @param distance - Distance from the center point.
 * @param vertical - Vertical radian value.
 * @param horizontal - Horizontal radian value.
 */
export function positionAroundVector3(vector, distance, vertical, horizontal) {
    var xAxis = roundToPrecision(Math.cos(vertical) * Math.cos(horizontal));
    var yAxis = roundToPrecision(Math.sin(vertical));
    var zAxis = roundToPrecision(Math.cos(vertical) * Math.sin(horizontal));
    return {
        x: vector.x + distance * xAxis,
        y: vector.y + distance * yAxis,
        z: vector.z + distance * zAxis
    };
}
//# sourceMappingURL=positionAroundVector3.js.map