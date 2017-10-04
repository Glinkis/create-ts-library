import { getElementPositionInContainer } from "./getElementPositionInContainer";

/**
 * Goes through an elements hierarchy to find its absolute position on the page.
 *
 * @memberof dom
 *
 * @param {HTMLElement} element - Element to get the position of.
 * @returns {{left: number, top: number}}
 */
export function getElementAbsolutePosition(element) {
  return getElementPositionInContainer(element, document.body);
}
