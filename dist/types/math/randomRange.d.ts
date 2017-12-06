/** @module math */
/**
 * Returns a pseudo-random number between a min (inclusive) and a max (exclusive) value.
 *
 * If min is greater than max the parameters are swapped to support inverted ranges.
 *
 * @param min - The minimum value of the range.
 * @param max - The maximum value of the range.
 */
export declare function randomRange(min: number | null | undefined, max: number | null | undefined): number;
