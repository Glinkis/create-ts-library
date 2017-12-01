/**
 * @param min
 * @param value
 */
export function clampMin(min, value) {
    if (min != null && value <= min) {
        return min;
    }
    return value;
}
//# sourceMappingURL=clampMin.js.map