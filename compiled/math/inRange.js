/**
 * Checks if value is inside a range.
 *
 * @param value - Value to check.
 * @param min - Range minimum boundary.
 * @param max - Range maximum boundary.
 * @param threshold - Optional threshold value.
 *
 * @returns {boolean}
 */
export function inRange(value, min, max, threshold) {
    if (threshold === void 0) { threshold = 0; }
    return value + threshold >= min && value - threshold <= max;
}
//# sourceMappingURL=inRange.js.map