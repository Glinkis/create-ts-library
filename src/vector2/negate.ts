/** @module vector2 */ /** */
import { IVector2 } from "../vector2";

/**
 * Returns the negated coordinated of a vector.
 *
 * @param vector - Vector to negate.
 */
export function negate(vector: IVector2): IVector2 {
  return {
    x: -vector.x === -0 ? 0 : -vector.x,
    y: -vector.y === -0 ? 0 : -vector.y
  };
}
