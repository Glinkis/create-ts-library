/**
 * Scales a vector by a value.
 *
 * @memberof vector3
 *
 * @param {{ x: number, y: number, z: number }} vector - Vector to scale.
 * @param {number} value - Value to scale by.
 *
 * @returns {{ x: number, y: number, z: number }}
 */
export function scale(vector, value) {
  return {
    x: vector.x * value,
    y: vector.y * value,
    z: vector.z * value
  };
}
