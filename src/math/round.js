/**
 * Rounds number to a specific radix.
 *
 * @memberof math
 *
 * @param {number} value
 * @param {number} radix
 * @returns {number}
 */
export function round(value, radix = 1) {
  return Math.round(value / radix) * radix;
}
