/**
 * Computes the amount of decimals of a number.
 * Note: Will drop trailing zeroes off a numeric value.
 * 1.00 => 0 decimals
 * '1.00' => 2 decimals.
 *
 * @memberof math
 *
 * @param {number | string} value - A value as a number or a string.
 *
 * @returns {number}
 */
export declare function decimalPlaces(value: any): number;
