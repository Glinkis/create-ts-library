/**
 * Computes the amount of decimals of a number.
 * Note: Will drop trailing zeroes off a numeric value.
 * 1.00 => 0 decimals
 * '1.00' => 2 decimals.
 *
 * @param {number | string} value - A value as a number or a string.
 * @returns {number}
 */
export function decimalPlaces(value) {
  const match = ('' + value).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);

  if (!match) {
    return 0;
  }

  return Math.max(
    0,
    // Number of digits right of decimal point.
    (match[1] ? match[1].length : 0)
    // Adjust for scientific notation.
    - (match[2] ? +match[2] : 0));
}
