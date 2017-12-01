/**
 * Increases velocity until stop.
 *
 * @param t - [0-1]
 */
export function easeInCirc(t) {
    return -1 * (Math.sqrt(1 - t * t) - 1);
}
//# sourceMappingURL=easeInCirc.js.map