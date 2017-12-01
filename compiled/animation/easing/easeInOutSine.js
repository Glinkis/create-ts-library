/**
 * Slight acceleration at beginning and slight deceleration at end.
 *
 * @param t - [0-1]
 */
export function easeInOutSine(t) {
    return -0.5 * (Math.cos(Math.PI * t) - 1);
}
//# sourceMappingURL=easeInOutSine.js.map