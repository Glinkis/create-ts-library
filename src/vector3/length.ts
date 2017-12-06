import { IVector3 } from "../vector3";
import { dot } from "./dot";

/**
 * Returns length of a vector.
 *
 * @param vector - Vector.
 */
export function length(vector: IVector3) {
  return Math.sqrt(dot(vector, vector));
}
