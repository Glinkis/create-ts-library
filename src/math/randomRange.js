/**
 * Returns a pseudo-random number between a min (inclusive) and a max (exclusive) value.
 *
 * If min is greater than max the parameters are swapped to support inverted ranges.
 *
 * @memberof math
 *
 * @param {number} min - The minimum value of the range.
 * @param {number} max - The maximum value of the range.
 * @return {number}
 */
export function randomRange(min, max) {
  return (
    Math.min(min, max) +
    Math.random() * (Math.max(min, max) - Math.min(min, max))
  );
}
