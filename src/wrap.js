export default function wrap(value, min, max) {
    var range = max - min;
    if (value < min) {
        value = max - (min - value) % (range);
    }
    else {
        value = min + (value - min) % (range);
    }
    return value;
}
;
//# sourceMappingURL=wrap.js.map