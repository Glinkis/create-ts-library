import { getElementPositionInContainer } from "./getElementPositionInContainer";
/**
 * Goes through an elements hierarchy to find its absolute position on the page.
 *
 * @param element - Element to get the position of.
 */
export function getElementAbsolutePosition(element) {
    return getElementPositionInContainer(element, document.body);
}
//# sourceMappingURL=getElementAbsolutePosition.js.map