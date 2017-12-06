import { IVector2 } from "../vector2";
import { dot } from "./dot";

/**
 * Returns length of a vector.
 *
 * @param vector - Vector.
 */
export function length(vector: IVector2) {
  return Math.sqrt(dot(vector, vector));
}
