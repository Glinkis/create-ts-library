import { IVector2 } from "../vector2";

/**
 * Multiplies two vectors and returns the result.
 *
 * @param vector1 - First vector.
 * @param vector2 - Second vector.
 */
export function multiply(vector1: IVector2, vector2: IVector2): IVector2 {
  return {
    x: vector1.x * vector2.x,
    y: vector1.y * vector2.y
  };
}
