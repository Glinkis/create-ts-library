/** @module vector2 */ /** */
import { IVector2 } from "../vector2";

/**
 * Returns the distance between two vectors.
 *
 * @param vector1 - Point1 position.
 * @param vector2 - Point2 position.
 */
export function distance(vector1: IVector2, vector2: IVector2) {
  const x = Math.abs(vector1.x - vector2.x) ** 2;
  const y = Math.abs(vector1.y - vector2.y) ** 2;
  return Math.sqrt(x + y);
}
