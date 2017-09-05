/**
 * @typedef {object} Vector2
 * @property {number} x
 * @property {number} y
 */

/**
 * Checks for a circular collision between object a and b.
 *
 * @memberof logic
 *
 * @param {Vector2} aPos - First circle position.
 * @param {number} aSize - First circle size;
 * @param {Vector2} bPos - Second circle position.
 * @param {number} bSize - Second circle size.
 * @returns {boolean}
 */
export function circularCollision(aPos, aSize, bPos, bSize) {
  return (
    Math.pow(bPos.x - aPos.x, 2) + Math.pow(aPos.y - bPos.y, 2) <=
    Math.pow(aSize + bSize, 2)
  );
}
