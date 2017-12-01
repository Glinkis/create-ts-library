/**
 * Decelerates to zero velocity.
 *
 * @param t - [0-1]
 */
export function easeOutCubic(t) {
    var t1 = t - 1;
    return t1 * t1 * t1 + 1;
}
//# sourceMappingURL=easeOutCubic.js.map