/**
 * @param max
 * @param value
 */
export function clampMax(max, value) {
    if (max != null && value >= max) {
        return max;
    }
    return value;
}
//# sourceMappingURL=clampMax.js.map