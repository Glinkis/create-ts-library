const nativeMethod = HTMLElement.prototype.addEventListener;

function newAddEventListener(
  this: { eventListeners: ITmpEventListener[] },
  type: string,
  listener: any
) {
  if (!(this.eventListeners instanceof Array)) {
    this.eventListeners = [];
  }

  this.eventListeners.push({ type, listener });
  nativeMethod.call(this, type, listener);
}

function newRemoveEventListener(
  this: { eventListeners: ITmpEventListener[] },
  type: string,
  listener: any
) {
  if (!(this.eventListeners instanceof Array)) {
    this.eventListeners = [];
  }

  const listeners = this.eventListeners;
  const result = listeners.find(
    l => l.type === type && l.listener === listener
  );

  if (result) {
    const index = listeners.indexOf(result);
    if (index > -1) {
      listeners.splice(index, 1);
    }
  }

  nativeMethod.call(this, type, listener);
}

export function trackEventListeners() {
  const proto = HTMLElement.prototype;

  if (!(proto.addEventListener instanceof newAddEventListener)) {
    proto.addEventListener = newAddEventListener;
  }

  if (!(proto.removeEventListener instanceof newRemoveEventListener)) {
    proto.removeEventListener = newRemoveEventListener;
  }
}

export interface ITmpEventListener {
  type: string;
  listener: any;
}
