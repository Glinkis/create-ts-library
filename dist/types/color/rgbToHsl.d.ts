/**
 * Converts an RGB color value to HSL.
 * Conversion formula adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 *
 * Assumes r, g, and b are contained in the set [0, 255] and returns h, s, and l in the set [0, 1].
 *
 * @memberof color
 *
 * @param {number} red - The red color value.
 * @param {number} green - The green color value.
 * @param {number} blue - The blue color value.
 *
 * @returns {{ h: number, s: number, l: number }} - The HSL representation.
 */
export declare function rgbToHsl(red: any, green: any, blue: any): {
    h: number;
    s: number;
    l: number;
};
