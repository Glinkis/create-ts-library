export default function mapToRange(value, inStart, inEnd, outStart, outEnd) {
    value = (value - inStart) / (inEnd - inStart);
    value = outStart + ((outEnd - outStart) * value);
    return value;
}
//# sourceMappingURL=mapToRange.js.map