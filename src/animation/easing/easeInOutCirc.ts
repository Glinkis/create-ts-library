/**
 * Fast increase in velocity, fast decrease in velocity.
 *
 * @memberof animation.easing
 *
 * @param {number} t - [0-1]
 *
 * @returns {number}
 */
export function easeInOutCirc(t) {
  const a = t * 2;
  const b = a - 2;

  if (a < 1) {
    return -0.5 * (Math.sqrt(1 - a * a) - 1);
  }

  return 0.5 * (Math.sqrt(1 - b * b) + 1);
}
