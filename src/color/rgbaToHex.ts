/** @module color */ /** */

/** @private */
function componentToHex(c: number) {
  const hex = c.toString(16);
  return hex.length === 1 ? `0${hex}` : hex;
}

/**
 * Converts RGB(A) values to a hex string.
 *
 * @param r - Red.
 * @param g - Green.
 * @param b - Blue.
 * @param a - Alpha.
 */
export function rgbaToHex(r: number, g: number, b: number, a?: number) {
  const hex = `#${componentToHex(r) + componentToHex(g) + componentToHex(b)}`;
  return a !== undefined ? hex + componentToHex(a) : hex;
}
