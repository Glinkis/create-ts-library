/**
 * Converts a NodeList to an Array.
 *
 * @memberof Array
 *
 * @param {NodeList} nodeList - A NodeList.
 * @return {Array}
 *
 * @example
 *
 * // => [div, div, …]
 * toArray(document.querySelectorAll('div'));
 */
export function nodeListToArray(nodeList) {
  return Array.prototype.slice.call(nodeList);
}
