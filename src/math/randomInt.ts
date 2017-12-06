/** @module math */ /** */
import { randomRange } from "./randomRange";

/**
 * Gets random integer inside range or snap to min/max values.
 *
 * @param min - Minimum value.
 * @param max - Maximum value.
 */
export function randomInt(min: number, max: number) {
  // can't be max + 0.5 otherwise it will round up if `rand`
  // returns `max` causing it to overflow range.
  // -0.5 and + 0.49 are required to avoid bias caused by rounding
  return Math.round(randomRange(min - 0.5, max + 0.499999999999));
}
