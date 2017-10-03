/**
 * Converts an RGB color value to HSL.
 * Conversion formula adapted from http://en.wikipedia.org/wiki/HSL_color_space.
 *
 * Assumes r, g, and b are contained in the set [0, 255] and returns h, s, and l in the set [0, 1].
 *
 * @memberof color
 *
 * @param {number} red - The red color value.
 * @param {number} green - The green color value.
 * @param {number} blue - The blue color value.
 * @return {{
 * h: number,
 * s: number,
 * l: number
 * }} - The HSL representation.
 */
export function RgbToHsl(red, green, blue) {
  const r = red / 255;
  const g = green / 255;
  const b = blue / 255;

  /** @type {number} */
  const max = Math.max(r, g, b);
  /** @type {number} */
  const min = Math.min(r, g, b);

  let h = 0;
  let s = 0;
  let l = (max + min) / 2;

  if (max === min) {
    h = s = 0; // achromatic
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    if (max === r) {
      h = (g - b) / d + (g < b ? 6 : 0);
    } else if (max === g) {
      h = (b - r) / d + 2;
    } else if (max === b) {
      h = (r - g) / d + 4;
    }
    h /= 6;
  }

  return { h, s, l };
}
