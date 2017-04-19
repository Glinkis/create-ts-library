/**
 * Maps a value from an input range to an output range.
 *
 * @param {number} value
 * @param {number} inStart
 * @param {number} inEnd
 * @param {number} outStart
 * @param {number} outEnd
 * @returns {number}
 */
export default function mapToRange(value: number, inStart: number, inEnd: number, outStart: number, outEnd: number): number {
  value = (value - inStart) / (inEnd - inStart);
  value = outStart + ((outEnd - outStart) * value);
  return value;
}
