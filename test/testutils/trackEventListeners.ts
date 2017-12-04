const nativeMethod = HTMLElement.prototype.addEventListener;

function newAddEventListener(this: any, type: string, listener: any) {
  if (!(this.eventListeners instanceof Array)) {
    this.eventListeners = [] as TmpEventListener[];
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

export type TmpEventListener = {
  type: string;
  listener: any;
};
