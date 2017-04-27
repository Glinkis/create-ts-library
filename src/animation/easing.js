/**
 * @module
 * @memberof animation
 */

/**
 * No easing, no acceleration.
 *
 * @memberof animation.easing
 *
 * @param {number} t
 * @returns {number}
 */
export function linear(t) {
  return t;
}

/**
 * Slight acceleration from zero to full speed.
 *
 * @memberof animation.easing
 *
 * @param {number} t
 * @returns {number}
 */
export function easeInSine(t) {
  return -1 * Math.cos(t * (Math.PI / 2)) + 1;
}

/**
 * Slight deceleration at the end.
 *
 * @memberof animation.easing
 *
 * @param {number} t
 * @returns {number}
 */
export function easeOutSine(t) {
  return Math.sin(t * (Math.PI / 2));
}

/**
 * Slight acceleration at beginning and slight deceleration at end.
 *
 * @memberof animation.easing
 *
 * @param {number} t
 * @returns {number}
 */
export function easeInOutSine(t) {
  return -0.5 * (Math.cos(Math.PI * t) - 1);
}

/**
 * Accelerates from zero velocity.
 *
 * @memberof animation.easing
 *
 * @param {number} t
 * @returns {number}
 */
export function easeInQuad(t) {
  return t * t;
}

/**
 * Decelerates to zero velocity.
 *
 * @memberof animation.easing
 *
 * @param {number} t
 * @returns {number}
 */
export function easeOutQuad(t) {
  return t * (2 - t);
}

/**
 * Accelerates until halfway, then decelerates.
 *
 * @memberof animation.easing
 *
 * @param {number} t
 * @returns {number}
 */
export function easeInOutQuad(t) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

/**
 * Accelerates from zero velocity.
 *
 * @memberof animation.easing
 *
 * @param {number} t
 * @returns {number}
 */
export function easeInCubic(t) {
  return t * t * t;
}

/**
 * Decelerates to zero velocity.
 *
 * @memberof animation.easing
 *
 * @param {number} t
 * @returns {number}
 */
export function easeOutCubic(t) {
  const t1 = t - 1;
  return t1 * t1 * t1 + 1;
}

/**
 * Accelerates until halfway, then decelerates.
 *
 * @memberof animation.easing
 *
 * @param {number} t
 * @returns {number}
 */
export function easeInOutCubic(t) {
  return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
}

/**
 * Accelerates from zero velocity.
 *
 * @memberof animation.easing
 *
 * @param {number} t
 * @returns {number}
 */
export function easeInQuart(t) {
  return t * t * t * t;
}

/**
 * Decelerates to zero velocity.
 *
 * @memberof animation.easing
 *
 * @param {number} t
 * @returns {number}
 */
export function easeOutQuart(t) {
  const t1 = t - 1;
  return 1 - t1 * t1 * t1 * t1;
}

/**
 * Accelerates until halfway, then decelerates.
 *
 * @memberof animation.easing
 *
 * @param {number} t
 * @returns {number}
 */
export function easeInOutQuart(t) {
  const t1 = t - 1;
  return t < 0.5 ? 8 * t * t * t * t : 1 - 8 * t1 * t1 * t1 * t1;
}

/**
 * Accelerates from zero velocity..
 *
 * @memberof animation.easing
 *
 * @param {number} t
 * @returns {number}
 */
export function easeInQuint(t) {
  return t * t * t * t * t;
}

/**
 * Decelerates to zero velocity.
 *
 * @memberof animation.easing
 *
 * @param {number} t
 * @returns {number}
 */
export function easeOutQuint(t) {
  const t1 = t - 1;
  return 1 + t1 * t1 * t1 * t1 * t1;
}

/**
 * Accelerates until halfway, then decelerates.
 *
 * @memberof animation.easing
 *
 * @param {number} t
 * @returns {number}
 */
export function easeInOutQuint(t) {
  const t1 = t - 1;
  return t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * t1 * t1 * t1 * t1 * t1;
}

/**
 * Accelerates exponentially until finish.
 *
 * @memberof animation.easing
 *
 * @param {number} t
 * @returns {number}
 */
export function easeInExpo(t) {
  return t === 0 ? 0 : Math.pow(2, 10 * (t - 1));
}

/**
 * Initial exponential acceleration slowing to stop.
 *
 * @memberof animation.easing
 *
 * @param {number} t
 * @returns {number}
 */
export function easeOutExpo(t) {
  return t === 1 ? 1 : -Math.pow(2, -10 * t) + 1;
}

/**
 * Exponential acceleration and deceleration.
 *
 * @memberof animation.easing
 *
 * @param {number} t
 * @returns {number}
 */
export function easeInOutExpo(t) {
  if (t === 0 || t === 1) {
    return t;
  }

  const a = t * 2;
  const b = a - 1;

  if (a < 1) {
    return 0.5 * Math.pow(2, 10 * b);
  }

  return 0.5 * (-Math.pow(2, -10 * b) + 2);
}

/**
 * Increases velocity until stop.
 *
 * @memberof animation.easing
 *
 * @param {number} t
 * @returns {number}
 */
export function easeInCirc(t) {
  return -1 * (Math.sqrt(1 - t * t) - 1);
}

/**
 * Start fast, then decreases velocity until stop.
 *
 * @memberof animation.easing
 *
 * @param {number} t
 * @returns {number}
 */
export function easeOutCirc(t) {
  const t1 = t - 1;
  return Math.sqrt(1 - t1 * t1);
}

/**
 * Fast increase in velocity, fast decrease in velocity.
 *
 * @memberof animation.easing
 *
 * @param {number} t
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
