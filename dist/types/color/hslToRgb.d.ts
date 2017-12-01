/**
 * Converts an HSL color value to RGB. Conversion formula
 * adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 * Assumes h, s, and l are contained in the set [0, 1] and
 * returns r, g, and b in the set [0, 255].
 *
 * @memberof color
 *
 * @param {number} h - The hue.
 * @param {number} s - The saturation.
 * @param {number} l - The lightness.
 *
 * @returns {{ r: number, g: number, b: number }} - The RGB representation.
 */
export declare function hslToRgb(h: any, s: any, l: any): {
    r: number;
    g: number;
    b: number;
};
