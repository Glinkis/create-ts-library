/**
 * Goes through an elements hierarchy to find its absolute position.
 *
 * @memberof dom
 *
 * @param {HTMLElement} element - Element to get the position of.
 * @returns {{left, top}}
 */
export function getElementAbsolutePosition(element) {
  let top = 0;
  let left = 0;

  do {
    top += element.offsetTop || 0;
    left += element.offsetLeft || 0;
    element = element.offsetParent;
  } while (element);

  return { left, top };
}
