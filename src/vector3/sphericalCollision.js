/**
 * Checks for a spherical collision between object a and b.
 *
 * @memberof vector3
 *
 * @param {{
 * x: number,
 * y: number,
 * z: number
 * }} spherePos1 - First sphere position.
 * @param {number} aSize - First sphere size;
 * @param {{
 * x: number,
 * y: number,
 * z: number
 * }} spherePos2 - Second sphere position.
 * @param {number} bSize - Second sphere size.
 * @returns {boolean}
 */
export function sphericalCollision(spherePos1, aSize, spherePos2, bSize) {
  return (
    Math.pow(spherePos1.x - spherePos2.x, 2) +
      Math.pow(spherePos1.y - spherePos2.y, 2) +
      Math.pow(spherePos1.z - spherePos2.z, 2) <=
    Math.pow(aSize + bSize, 2)
  );
}
