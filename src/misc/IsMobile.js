/**
 * @memberof misc
 */
export const IsMobile = {
  /** @returns {boolean} */
  Android() {
    return !!navigator.userAgent.match(/Android/i);
  },
  /** @returns {boolean} */
  BlackBerry() {
    return !!navigator.userAgent.match(/BlackBerry/i);
  },
  /** @returns {boolean} */
  iOS() {
    return !!navigator.userAgent.match(/iPhone|iPad|iPod/i);
  },
  /** @returns {boolean} */
  Opera() {
    return !!navigator.userAgent.match(/Opera Mini/i);
  },
  /** @returns {boolean} */
  Windows() {
    return (
      !!navigator.userAgent.match(/IEMobile/i) ||
      !!navigator.userAgent.match(/WPDesktop/i)
    );
  },
  /** @returns {boolean} */
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
