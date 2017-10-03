

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

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);

  let l = (max + min) / 2;

  if (max === min) {
    return { h: 0, s: 0, l };
  }

  const d = max - min;
  const s = l > 0.5 ? d / (2 - d) : d / (max + min);
  const h = hue(r, max, h, g, b, d);

  return { h, s, l };
}

function hue(r, max, h, g, b, d) {
  if (r === max) {
    h = (g - b) / d + (g < b ? 6 : 0);
  } else if (r === max) {
    h = (b - r) / d + 2;
  } else if (b === max) {
    h = (r - g) / d + 4;
  }
  return h / 6;
}
