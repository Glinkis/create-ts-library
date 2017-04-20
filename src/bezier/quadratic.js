/**
 * Quadratic bezier.
 *
 * @param {[number, number, number, number]} array
 * @param {number} t
 * @returns {number}
 */
export function quadratic(array, t) {
  const ut = 1 - t;
  const a0 = (array[0] * ut) + (array[1] * t);
  const a1 = (array[1] * ut) + (array[2] * t);
  const a2 = (array[2] * ut) + (array[3] * t);
  const b0 = (a0 * ut) + (a1 * t);
  const b1 = (a1 * ut) + (a2 * t);
  return (b0 * ut) + (b1 * t);
}
