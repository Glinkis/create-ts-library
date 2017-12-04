const navigator = window.navigator;

export const isMobile = {
  /**
   * @private
   */
  isAndroid() {
    return !!navigator.userAgent.match(/Android/i);
  },
  /**
   * @private
   */
  isBlackBerry() {
    return !!navigator.userAgent.match(/BlackBerry/i);
  },
  /**
   * @private
   */
  isiOS() {
    return !!navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  /**
   * @private
   */
  isOpera() {
    return !!navigator.userAgent.match(/Opera Mini/i);
  },
  /**
   * @private
   */
  isWindows() {
    return (
      !!navigator.userAgent.match(/IEMobile/i) ||
      !!navigator.userAgent.match(/WPDesktop/i)
    );
  },
  /**
   * @private
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
