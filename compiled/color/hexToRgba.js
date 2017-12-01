/**
 * Converts a hex string to a color.
 * If it can't be converted null is returned.
 *
 * @param hex - A hexadecimal color string. (i.e. #CCCCCCFF or CCCCCC)
 */
export function hexToRgba(hex) {
    hex = hex.replace("#", "");
    var r = parseInt(hex.substring(0, 2), 16);
    var g = parseInt(hex.substring(2, 4), 16);
    var b = parseInt(hex.substring(4, 6), 16);
    if (hex.length === 6) {
        return { r: r, g: g, b: b };
    }
    else if (hex.length === 8) {
        return {
            r: r,
            g: g,
            b: b,
            a: parseInt(hex.substring(6, 8), 16)
        };
    }
    return null;
}
//# sourceMappingURL=hexToRgba.js.map