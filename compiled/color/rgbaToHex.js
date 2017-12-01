function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length === 1 ? "0" + hex : hex;
}
/**
 * Converts RGB(A) values to a hex string.
 *
 * @param r - Red.
 * @param g - Green.
 * @param b - Blue.
 * @param a - Alpha.
 */
export function rgbaToHex(r, g, b, a) {
    var hex = "#" + (componentToHex(r) + componentToHex(g) + componentToHex(b));
    return a !== undefined ? hex + componentToHex(a) : hex;
}
//# sourceMappingURL=rgbaToHex.js.map