import { dot } from "./dot";
/**
 * Returns length of a vector.
 *
 * @param vector - Vector.
 */
export function length(vector: { x: number; y: number }) {
  return Math.sqrt(dot(vector, vector));
}
