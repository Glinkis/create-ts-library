/**
 * @typedef {object} Vector3
 * @property {number} x
 * @property {number} y
 * @property {number} z
 * @private
 */

/**
 * Checks for a spherical collision between object a and b.
 *
 * @memberof logic
 *
 * @param {Vector3} aPos - First sphere position.
 * @param {number} aSize - First sphere size;
 * @param {Vector3} bPos - Second sphere position.
 * @param {number} bSize - Second sphere size.
 * @returns {boolean}
 */
export function sphericalCollision(aPos, aSize, bPos, bSize) {
  return (
    Math.pow(bPos.x - aPos.x, 2) +
      Math.pow(aPos.y - bPos.y, 2) +
      Math.pow(aPos.z - bPos.z, 2) <=
    Math.pow(aSize + bSize, 2)
  );
}
