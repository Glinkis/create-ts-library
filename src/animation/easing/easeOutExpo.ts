/**
 * Initial exponential acceleration slowing to stop.
 *
 * @param t - [0-1]
 */
export function easeOutExpo(t: number) {
  return t === 1 ? 1 : -(2 ** (-10 * t)) + 1;
}
