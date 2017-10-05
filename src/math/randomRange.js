/**
 * Returns a pseudo-random number between a min (inclusive) and a max (exclusive) value.
 *
 * If min is greater than max the parameters are swapped to support inverted ranges.
 *
 * @memberof math
 *
 * @param {number?} min - The minimum value of the range.
 * @param {number?} max - The maximum value of the range.
 * @returns {number}
 */
export function randomRange(min, max) {
  min = min == null ? Number.MIN_VALUE : min;
  max = max == null ? Number.MAX_VALUE : max;
  return (
    Math.min(min, max) +
    Math.random() * (Math.max(min, max) - Math.min(min, max))
  );
}
