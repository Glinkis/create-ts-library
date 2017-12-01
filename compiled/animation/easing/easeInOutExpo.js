/**
 * Exponential acceleration and deceleration.
 *
 * @param t - [0-1]
 */
export function easeInOutExpo(t) {
    if (t === 0 || t === 1) {
        return t;
    }
    var a = t * 2;
    var b = a - 1;
    if (a < 1) {
        return 0.5 * Math.pow(2, (10 * b));
    }
    return 0.5 * (-(Math.pow(2, (-10 * b))) + 2);
}
//# sourceMappingURL=easeInOutExpo.js.map