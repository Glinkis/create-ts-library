/**
 * Checks for a circular collision between object a and b.
 *
 * @memberof vector2
 *
 * @param {{
 * x: number,
 * y: number }} aPos - First circle position.
 * @param {number} aSize - First circle size;
 * @param {{
 * x: number,
 * y: number }} bPos - Second circle position.
 * @param {number} bSize - Second circle size.
 *
 * @returns {boolean}
 */
export function circularCollision(aPos, aSize, bPos, bSize) {
  return (
    Math.pow(bPos.x - aPos.x, 2) + Math.pow(aPos.y - bPos.y, 2) <=
    Math.pow(aSize + bSize, 2)
  );
}
