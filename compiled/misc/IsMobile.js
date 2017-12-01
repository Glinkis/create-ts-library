var navigator = window.navigator;
export var isMobile = {
    /**
     * @private
     */
    isAndroid: function () {
        return !!navigator.userAgent.match(/Android/i);
    },
    /**
     * @private
     */
    isBlackBerry: function () {
        return !!navigator.userAgent.match(/BlackBerry/i);
    },
    /**
     * @private
     */
    isiOS: function () {
        return !!navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    /**
     * @private
     */
    isOpera: function () {
        return !!navigator.userAgent.match(/Opera Mini/i);
    },
    /**
     * @private
     */
    isWindows: function () {
        return (!!navigator.userAgent.match(/IEMobile/i) ||
            !!navigator.userAgent.match(/WPDesktop/i));
    },
    /**
     * @private
     */
    any: function () {
        return (this.isAndroid() ||
            this.isBlackBerry() ||
            this.isiOS() ||
            this.isOpera() ||
            this.isWindows());
    }
};
//# sourceMappingURL=IsMobile.js.map