/**
 * Converts a hex string to a color.
 * If it can't be converted null is returned.
 *
 * @param hex - A hexadecimal color string. (i.e. #CCCCCCFF or CCCCCC)
 */
export declare function hexToRgba(hex: string): {
    r: number;
    g: number;
    b: number;
} | {
    r: number;
    g: number;
    b: number;
    a: number;
};
