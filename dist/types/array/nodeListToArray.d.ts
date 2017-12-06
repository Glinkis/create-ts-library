/** @module array */
/**
 * Converts a NodeList to an Array.
 *
 * @param nodeList - A NodeList.
 *
 * @example
 * ```js
 *
 * // => [div, div, …]
 * toArray(document.querySelectorAll('div'));
 * ```
 */
export declare function nodeListToArray(nodeList: NodeList): any[];
