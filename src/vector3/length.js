import { dot } from "./dot";
/**
 * Returns length of a vector.
 *
 * @memberof vector2
 *
 * @param {{
 * x: number,
 * y: number,
 * z: number
 * }} vector - Vector.
 *
 * @returns {number}
 */
export function length(vector) {
  return Math.sqrt(dot(vector, vector));
}
