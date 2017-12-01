/**
 * Converts a NodeList to an Array.
 *
 * @param nodeList - A NodeList.
 *
 * @example
 * // => [div, div, …]
 * toArray(document.querySelectorAll('div'));
 */
export function nodeListToArray(nodeList) {
    return Array.prototype.slice.call(nodeList);
}
//# sourceMappingURL=nodeListToArray.js.map