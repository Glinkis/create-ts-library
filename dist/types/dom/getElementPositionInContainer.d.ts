/** @module dom */
/**
 * Goes through an elements hierarchy to find its position relative to its container.
 *
 * @param element - Element to get the position of.
 * @param container - The container to get the position relative to.
 */
export declare function getElementPositionInContainer(element: HTMLElement | null, container: HTMLElement): {
    left: number;
    top: number;
};
