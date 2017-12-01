/**
 * Converts a hex string to a color.
 * If it can't be converted null is returned.
 *
 * @memberof color
 *
 * @param {string} hex - A hexadecimal color string. (i.e. #CCCCCCFF or CCCCCC)
 *
 * @returns {object}
 */
export declare function hexToRgba(hex: any): {
    r: number;
    g: number;
    b: number;
} | {
    r: number;
    g: number;
    b: number;
    a: number;
};
