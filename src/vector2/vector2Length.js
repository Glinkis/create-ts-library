import { vector2Dot } from "./vector2Dot";
/**
 * Returns length of a vector.
 *
 * @memberof vector2
 *
 * @param {{
 * x: number,
 * y: number
 * }} vector - Vector.
 *
 * @returns {number}
 */
export function vector2Length(vector) {
  return Math.sqrt(vector2Dot(vector, vector));
}
