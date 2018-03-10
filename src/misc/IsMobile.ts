/** @module misc */ /** */

/** @private */
const match = (window || global).navigator.userAgent.match;

export const isMobile = {
  /** @private */
  isAndroid() {
    return !!match(/Android/i);
  },
  /** @private */
  isBlackBerry() {
    return !!match(/BlackBerry/i);
  },
  /** @private */
  isiOS() {
    return !!match(/iPhone|iPad|iPod/i);
  },
  /** @private */
  isOpera() {
    return !!match(/Opera Mini/i);
  },
  /** @private */
  isWindows() {
    return !!match(/IEMobile/i) || !!match(/WPDesktop/i);
  },
  /** @private */
  any() {
    return (
      this.isAndroid() ||
      this.isBlackBerry() ||
      this.isiOS() ||
      this.isOpera() ||
      this.isWindows()
    );
  }
};
