/**
 * Goes through an elements hierarchy to find its position relative to its container.
 *
 * @memberof dom
 *
 * @param {HTMLElement} element - Element to get the position of.
 * @param {HTMLElement} container - The container to get the position relative to.
 *
 * @returns {{left: number, top: number}}
 */
export declare function getElementPositionInContainer(element: any, container: any): {
    left: number;
    top: number;
};
