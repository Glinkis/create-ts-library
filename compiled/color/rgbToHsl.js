function hue(max, r, g, b, d) {
    var h = 0;
    if (r === max) {
        h = (g - b) / d + (g < b ? 6 : 0);
    }
    else if (r === max) {
        h = (b - r) / d + 2;
    }
    else if (b === max) {
        h = (r - g) / d + 4;
    }
    return h / 6;
}
/**
 * Converts an RGB color value to HSL.
 * Conversion formula adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 *
 * Assumes r, g, and b are contained in the set [0, 255] and returns h, s, and l in the set [0, 1].
 *
 * @param red - The red color value.
 * @param green - The green color value.
 * @param  blue - The blue color value.
 */
export function rgbToHsl(red, green, blue) {
    var r = red / 255;
    var g = green / 255;
    var b = blue / 255;
    var max = Math.max(r, g, b);
    var min = Math.min(r, g, b);
    var l = (max + min) / 2;
    if (max === min) {
        return { h: 0, s: 0, l: l };
    }
    var d = max - min;
    var s = l > 0.5 ? d / (2 - d) : d / (max + min);
    var h = hue(max, r, g, b, d);
    return { h: h, s: s, l: l };
}
//# sourceMappingURL=rgbToHsl.js.map