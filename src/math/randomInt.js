import { randomRange } from "./randomRange";

/**
 * Gets random integer inside range or snap to min/max values.
 *
 * @memberof math
 *
 * @param {number} min - Minimum value.
 * @param {number} max - Maximum value.
 *
 * @returns {number}
 */
export function randomInt(min, max) {
  // can't be max + 0.5 otherwise it will round up if `rand`
  // returns `max` causing it to overflow range.
  // -0.5 and + 0.49 are required to avoid bias caused by rounding
  return Math.round(randomRange(min - 0.5, max + 0.499999999999));
}
