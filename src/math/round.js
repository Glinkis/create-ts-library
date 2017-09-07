import { decimalPlaces } from "./decimalPlaces";

/**
 * Rounds number to a specific radix.
 *
 * @memberof math
 *
 * @param {number} value - Value to round.
 * @param {number} radix - Radix.
 * @returns {number}
 */
export function round(value, radix = 1) {
  value = Math.round(value / radix) * radix;
  return Number(value.toFixed(decimalPlaces(radix)));
}
