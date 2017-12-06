/** @module dom */ /** */
import { getElementPositionInContainer } from "./getElementPositionInContainer";

/**
 * Goes through an elements hierarchy to find its absolute position on the page.
 *
 * @param element - Element to get the position of.
 */
export function getElementAbsolutePosition(element: HTMLElement) {
  return getElementPositionInContainer(element, document.body);
}
