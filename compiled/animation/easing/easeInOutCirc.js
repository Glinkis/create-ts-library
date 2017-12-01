/**
 * Fast increase in velocity, fast decrease in velocity.
 *
 * @param t - [0-1]
 */
export function easeInOutCirc(t) {
    var a = t * 2;
    var b = a - 2;
    if (a < 1) {
        return -0.5 * (Math.sqrt(1 - a * a) - 1);
    }
    return 0.5 * (Math.sqrt(1 - b * b) + 1);
}
//# sourceMappingURL=easeInOutCirc.js.map