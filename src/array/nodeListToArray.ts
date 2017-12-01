/**
 * Converts a NodeList to an Array.
 *
 * @param nodeList - A NodeList.
 *
 * @example
 * // => [div, div, …]
 * toArray(document.querySelectorAll('div'));
 */
export function nodeListToArray(nodeList: NodeList): any[] {
  return Array.prototype.slice.call(nodeList);
}
