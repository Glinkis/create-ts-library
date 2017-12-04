/**
 * Accelerates from zero velocity.
 *
 * @param t - [0-1]
 */
export function easeInQuart(t: number) {
  return t * t * t * t;
}
