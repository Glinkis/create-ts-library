/** @module math */
/**
 * Computes the amount of decimals of a number.
 * Note: Will drop trailing zeroes off a numeric value.
 * 1.00 => 0 decimals
 * '1.00' => 2 decimals.
 *
 * @param value - A value as a number or a string.
 */
export declare function decimalPlaces(value: number | string): number;
