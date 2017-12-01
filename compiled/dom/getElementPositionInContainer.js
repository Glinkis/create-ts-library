/**
 * Goes through an elements hierarchy to find its position relative to its container.
 *
 * @param element - Element to get the position of.
 * @param container - The container to get the position relative to.
 */
export function getElementPositionInContainer(element, container) {
    var top = 0;
    var left = 0;
    do {
        top += element != null ? element.offsetTop : 0;
        left += element != null ? element.offsetLeft : 0;
        element = element != null ? element.parentElement : null;
    } while (element && element !== container);
    return { left: left, top: top };
}
//# sourceMappingURL=getElementPositionInContainer.js.map