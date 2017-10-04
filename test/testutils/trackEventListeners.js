const nativeMethod = HTMLElement.prototype.addEventListener;

/**
 * @param {string} type
 * @param {any} listener
 */
function newAddEventListener(type, listener) {
  if (!(this.eventListeners instanceof Array)) {
    /** @type {Array<TmpEventListener>} */
    this.eventListeners = [];
  }
  this.eventListeners.push({ type, listener });
  nativeMethod.call(this, type, listener);
}

export function trackEventListeners() {
  if (
    !(HTMLElement.prototype.addEventListener instanceof newAddEventListener)
  ) {
    HTMLElement.prototype.addEventListener = newAddEventListener;
  }
}

/**
 * @typedef {object} TmpEventListener
 * @property {string} type
 * @property {any} listener
 */
