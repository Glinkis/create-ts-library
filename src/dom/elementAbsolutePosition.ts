/** @module dom */ /** */
import { elementPositionInContainer } from "./elementPositionInContainer";

/**
 * Goes through an elements hierarchy to find its absolute position on the page.
 *
 * @param element - Element to get the position of.
 */
export function elementAbsolutePosition(element: HTMLElement) {
  return elementPositionInContainer(element, document.body);
}
