/**
 * Maps a value from an input range to an output range.
 *
 * @param value - The value to map.
 * @param inStart - In start value.
 * @param inEnd - In end value.
 * @param outStart - Out start value.
 * @param outEnd - Out end value.
 */
export function mapToRange(value, inStart, inEnd, outStart, outEnd) {
    value = (value - inStart) / (inEnd - inStart) || 0;
    if (value === Infinity) {
        return 0;
    }
    return outStart + (outEnd - outStart) * value;
}
//# sourceMappingURL=mapToRange.js.map