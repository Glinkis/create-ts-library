/**
 * Maps a value from an input range to an output range.
 *
 * @param {number} value - The value to map.
 * @param {number} inStart - In start value.
 * @param {number} inEnd - In end value.
 * @param {number} outStart - Out start value.
 * @param {number} outEnd - Out end value.
 * @returns {number}
 */
export function mapToRange(value, inStart, inEnd, outStart, outEnd) {
  value = (value - inStart) / (inEnd - inStart);
  value = outStart + (outEnd - outStart) * value;
  return value;
}
