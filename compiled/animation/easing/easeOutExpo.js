/**
 * Initial exponential acceleration slowing to stop.
 *
 * @param t - [0-1]
 */
export function easeOutExpo(t) {
    return t === 1 ? 1 : -(Math.pow(2, (-10 * t))) + 1;
}
//# sourceMappingURL=easeOutExpo.js.map