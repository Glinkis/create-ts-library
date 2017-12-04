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
export declare function rgbToHsl(red: number, green: number, blue: number): {
    h: number;
    s: number;
    l: number;
};
