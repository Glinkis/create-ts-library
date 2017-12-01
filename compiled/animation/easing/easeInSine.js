/**
 * Slight acceleration from zero to full speed.
 *
 * @param t - [0-1]
 */
export function easeInSine(t) {
    return -1 * Math.cos(t * (Math.PI / 2)) + 1;
}
//# sourceMappingURL=easeInSine.js.map