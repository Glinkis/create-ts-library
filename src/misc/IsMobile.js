const navigator = window.navigator;

/**
 * @memberof misc
 */
export const IsMobile = {
  /**
   * @private
   * @returns {boolean}
   */
  Android() {
    return !!navigator.userAgent.match(/Android/i);
  },
  /**
   * @private
   * @returns {boolean}
   */
  BlackBerry() {
    return !!navigator.userAgent.match(/BlackBerry/i);
  },
  /**
   * @private
   * @returns {boolean}
   */
  iOS() {
    return !!navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  /**
   * @private
   * @returns {boolean}
   */
  Opera() {
    return !!navigator.userAgent.match(/Opera Mini/i);
  },
  /**
   * @private
   * @returns {boolean}
   */
  Windows() {
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
      this.Android() ||
      this.BlackBerry() ||
      this.iOS() ||
      this.Opera() ||
      this.Windows()
    );
  }
};
