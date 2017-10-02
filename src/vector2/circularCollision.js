/**
 * Checks for a circular collision between object a and b.
 *
 * @memberof vector2
 *
 * @param {number} aPosX - First circle X-position.
 * @param {number} aPosY - First circle Y-position.
 * @param {number} aSize - First circle size;
 * @param {number} bPosX - Second circle X-position.
 * @param {number} bPosY - Second circle Y-position.
 * @param {number} bSize - Second circle size.
 * @returns {boolean}
 */
export function circularCollision(aPosX, aPosY, aSize, bPosX, bPosY, bSize) {
  return (
    Math.pow(bPosX - aPosX, 2) + Math.pow(aPosY - bPosY, 2) <=
    Math.pow(aSize + bSize, 2)
  );
}
