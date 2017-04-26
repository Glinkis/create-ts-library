/**
 * @module
 * @memberof animation
 */

/**
 * Ease in sine.
 *
 * @memberof animation.easing
 *
 * @param t
 * @param b
 * @param c
 * @param d
 * @returns {*}
 */
export function easeInSine(t, b, c, d) {
  return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
}

/**
 * Ease out sine.
 *
 * @memberof animation.easing
 *
 * @param t
 * @param b
 * @param c
 * @param d
 * @returns {*}
 */
export function easeOutSine(t, b, c, d) {
  return c * Math.sin(t / d * (Math.PI / 2)) + b;
}

/**
 * Ease in out sine.
 *
 * @memberof animation.easing
 *
 * @param t
 * @param b
 * @param c
 * @param d
 * @returns {*}
 */
export function easeInOutSine(t, b, c, d) {
  return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
}
