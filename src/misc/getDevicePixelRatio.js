/**
 * Returns the pixel ratio of the current device, as a value from 0 to 1.
 *
 * @memberof misc
 *
 * @returns {number}
 */
export function getDevicePixelRatio() {
  let ratio = 1;
  // To account for zoom, change to use deviceXDPI instead of systemXDPI
  if (
    screen.systemXDPI &&
    screen.logicalXDPI &&
    screen.systemXDPI > screen.logicalXDPI
  ) {
    // Only allow for values > 1
    ratio = window.systemXDPI / screen.logicalXDPI;
  } else if (window.devicePixelRatio) {
    ratio = window.devicePixelRatio;
  }
  return ratio;
}
