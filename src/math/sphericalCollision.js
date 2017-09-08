/**
 * Checks for a spherical collision between object a and b.
 *
 * @memberof math
 *
 * @param {number} aPosX - First sphere X-position.
 * @param {number} aPosY - First sphere Y-position.
 * @param {number} aPosZ - First sphere Z-position.
 * @param {number} aSize - First sphere size;
 * @param {number} bPosX - Second sphere X-position.
 * @param {number} bPosY - Second sphere Y-position.
 * @param {number} bPosZ - Second sphere Z-position.
 * @param {number} bSize - Second sphere size.
 * @returns {boolean}
 */
export function sphericalCollision(aPosX, aPosY, aPosZ, aSize, bPosX, bPosY, bPosZ, bSize) {
  return (
    Math.pow(bPosX - aPosX, 2) +
      Math.pow(aPosY - bPosY, 2) +
      Math.pow(aPosZ - bPosZ, 2) <=
    Math.pow(aSize + bSize, 2)
  );
}
