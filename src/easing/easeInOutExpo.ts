/** @module easing */

/**
 * Exponential acceleration and deceleration.
 *
 * @param t - [0-1]
 */
export function easeInOutExpo(t: number) {
  if (t === 0 || t === 1) {
    return t;
  }

  const a = t * 2;
  const b = a - 1;

  if (a < 1) {
    return 0.5 * 2 ** (10 * b);
  }

  return 0.5 * (-(2 ** (-10 * b)) + 2);
}
