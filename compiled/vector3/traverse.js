/**
 * Loops through the dimensions of a vector.
 * Starts at zero, so keep in mind that the number of callbacks will be the dimension sizes +1;
 *
 * @param vector - Vector to traverse.
 * @param callback - Callback for each step.
 * @param step - Step size (default: 1).
 */
export function traverse(vector, callback, step) {
    if (step === void 0) { step = 1; }
    for (var x = 0; x <= vector.x; x += step) {
        for (var y = 0; y <= vector.y; y += step) {
            for (var z = 0; z <= vector.z; z += step) {
                callback({ x: x, y: y, z: z });
            }
        }
    }
}
//# sourceMappingURL=traverse.js.map