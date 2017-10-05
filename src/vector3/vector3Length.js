import { vector3Dot } from "./vector3Dot";
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
export function vector3Length(vector) {
  return Math.sqrt(vector3Dot(vector, vector));
}
