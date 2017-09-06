const nativeMethod = HTMLElement.prototype.addEventListener;


HTMLElement.prototype.addEventListener = function(type, listener) {
  if (!(this.eventListeners instanceof Array)) {
    /** @type {Array<TmpEventListener>} */
    this.eventListeners = [];
  }
  this.eventListeners.push({ type, listener });
  nativeMethod.call(this, type, listener);
};

/**
 * @typedef {object} TmpEventListener
 * @property {string} type
 * @property {function} listener
 */
