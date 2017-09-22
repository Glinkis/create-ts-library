/**
 * Goes through an elements hierarchy to find its position relative to its container.
 *
 * @memberof dom
 *
 * @param {HTMLElement} element - Element to get the position of.
 * @param {HTMLElement} container - The container to get the position relative to.
 * @returns {{left: number, top: number}}
 */
export function getElementPositionInContainer(element, container) {
  let top = 0;
  let left = 0;

  do {
    top += element.offsetTop || 0;
    left += element.offsetLeft || 0;
    element = element.offsetParent;
  } while (element && element !== container);

  return { left, top };
}
