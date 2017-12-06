/** @module vector2 */ /** */
import { IVector2 } from "../vector2";

/**
 * Returns the dot product of two vectors.
 *
 * @param vector1 - First vector.
 * @param vector2 - Second vector.
 */
export function dot(vector1: IVector2, vector2: IVector2) {
  return vector1.x * vector2.x + vector1.y * vector2.y;
}
