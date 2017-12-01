/**
 * @param max
 * @param value
 */
export function clampMax(max: number | null | undefined, value: number) {
  if (max != null && value >= max) {
    return max;
  }
  return value;
}
