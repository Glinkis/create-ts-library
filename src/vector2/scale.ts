/** @module vector2 */ /** */
import { IVector2 } from "../vector2";

/**
 * Scales a vector by a value.
 *
 * @param vector - Vector to scale.
 * @param value - Value to scale by.
 */
export function scale(vector: IVector2, value: number): IVector2 {
  return {
    x: vector.x * value,
    y: vector.y * value
  };
}
