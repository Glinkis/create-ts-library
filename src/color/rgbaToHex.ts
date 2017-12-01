function componentToHex(c) {
  const hex = c.toString(16);
  return hex.length === 1 ? `0${hex}` : hex;
}

/**
 * Converts RGB(A) values to a hex string.
 *
 * @memberof color
 *
 * @param {number} r - Red.
 * @param {number} g - Green.
 * @param {number} b - Blue.
 * @param {number?} a - Alpha.
 *
 * @returns {string}
 */
export function rgbaToHex(r, g, b, a) {
  const hex = `#${componentToHex(r) + componentToHex(g) + componentToHex(b)}`;
  return a !== undefined ? hex + componentToHex(a) : hex;
}
