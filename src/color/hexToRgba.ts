/** @module color */

/**
 * Converts a hex string to a color.
 * If it can't be converted null is returned.
 *
 * @param hex - A hexadecimal color string. (i.e. #CCCCCCFF or CCCCCC)
 */
export function hexToRgba(hex: string) {
  hex = hex.replace("#", "");
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  if (hex.length === 6) {
    return { r, g, b };
  } else if (hex.length === 8) {
    return {
      r,
      g,
      b,
      a: parseInt(hex.substring(6, 8), 16)
    };
  }
  return null;
}
