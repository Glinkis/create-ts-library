/**
 * Returns a value clamped between a maximum and a minimum number.
 *
 * @param  value - The value to clamp.
 * @param  min - The minimum boundary.
 * @param  max - The maximum boundary.
 *
 * @example
 * clamp(5, 0, 10); // Returns 5
 * @example
 * clamp(-10, 0, 10); // Returns 0
 * @example
 * clamp(20, 0, 10); // Returns 10
 */
export declare function clamp(value: number, min: number, max: number): number;
