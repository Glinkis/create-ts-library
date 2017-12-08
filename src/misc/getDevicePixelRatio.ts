/** @module misc */ /** */

/**
 * Returns the pixel ratio of the current device, as a value from 0 to 1.
 */
export function getDevicePixelRatio() {
  let ratio = 1;
  // Something like node may not have the global window object.
  if (window == null) {
    return ratio;
  }
  // To account for zoom, change to use deviceXDPI instead of systemXDPI
  if (
    screen.systemXDPI &&
    screen.logicalXDPI &&
    screen.systemXDPI > screen.logicalXDPI
  ) {
    // Only allow for values > 1
    ratio = screen.systemXDPI / screen.logicalXDPI;
  } else if (window.devicePixelRatio) {
    ratio = window.devicePixelRatio;
  }
  return ratio;
}
