const navigator = window.navigator;

/**
 * @memberof misc
 */
export const isMobile = {
  /**
   * @private
   * @returns {boolean}
   */
  isAndroid() {
    return !!navigator.userAgent.match(/Android/i);
  },
  /**
   * @private
   * @returns {boolean}
   */
  isBlackBerry() {
    return !!navigator.userAgent.match(/BlackBerry/i);
  },
  /**
   * @private
   * @returns {boolean}
   */
  isiOS() {
    return !!navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  /**
   * @private
   * @returns {boolean}
   */
  isOpera() {
    return !!navigator.userAgent.match(/Opera Mini/i);
  },
  /**
   * @private
   * @returns {boolean}
   */
  isWindows() {
    return (
      !!navigator.userAgent.match(/IEMobile/i) ||
      !!navigator.userAgent.match(/WPDesktop/i)
    );
  },
  /**
   * @private
   * @returns {boolean}
   */
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
