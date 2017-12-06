import { IVector2 } from "../vector2";

/**
 * Checks for intersection between two vectors.
 *
 * @param vector1 - First vector.
 * @param size1 - First size;
 * @param vector2 - Second vector.
 * @param size2 - Second size.
 */
export function pointIntersection(
  vector1: IVector2,
  size1: number,
  vector2: IVector2,
  size2: number
) {
  return (
    (vector2.x - vector1.x) ** 2 + (vector1.y - vector2.y) ** 2 <=
    (size1 + size2) ** 2
  );
}
