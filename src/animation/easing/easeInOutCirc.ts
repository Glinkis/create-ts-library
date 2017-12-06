/** @module animation.easing */

/**
 * Fast increase in velocity, fast decrease in velocity.
 *
 * @param t - [0-1]
 */
export function easeInOutCirc(t: number) {
  const a = t * 2;
  const b = a - 2;

  if (a < 1) {
    return -0.5 * (Math.sqrt(1 - a * a) - 1);
  }

  return 0.5 * (Math.sqrt(1 - b * b) + 1);
}
