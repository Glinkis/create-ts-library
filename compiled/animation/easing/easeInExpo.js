/**
 * Accelerates exponentially until finish.
 *
 * @param t - [0-1]
 */
export function easeInExpo(t) {
    return t === 0 ? 0 : Math.pow(2, (10 * (t - 1)));
}
//# sourceMappingURL=easeInExpo.js.map