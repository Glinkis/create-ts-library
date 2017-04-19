export default function clamp(value, min, max) {
    value = (max != null) && value >= max ? max : value;
    value = (min != null) && value <= min ? min : value;
    return value;
}
//# sourceMappingURL=clamp.js.map