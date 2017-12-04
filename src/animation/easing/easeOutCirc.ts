/**
 * Start fast, then decreases velocity until stop.
 *
 * @param t - [0-1]
 */
export function easeOutCirc(t: number) {
  const t1 = t - 1;
  return Math.sqrt(1 - t1 * t1);
}
