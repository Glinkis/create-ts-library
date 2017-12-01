/**
 * Scales a vector by a value.
 *
 * @param vector - Vector to scale.
 * @param value - Value to scale by.
 */
export function scale(vector, value) {
    return {
        x: vector.x * value,
        y: vector.y * value,
        z: vector.z * value
    };
}
//# sourceMappingURL=scale.js.map