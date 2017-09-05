/**
 * Adds a DIV element that gets offset by the defined values.
 *
 * @param {HTMLElement} parent - Parent element.
 * @param {number} top - Top offset.
 * @param {number} left - Left offset.
 * @param {number?} width - Element width.
 * @param {number?} height - Element height.
 * @returns {Element}
 */
export function addOffsetElement(parent, top, left, width, height) {
  const element = document.createElement("div");
  element.style.position = "relative";
  element.style.top = `${top}px`;
  element.style.left = `${left}px`;
  element.style.width = `${width || 0}px`;
  element.style.height = `${height || 0}px`;
  parent.appendChild(element);
  return element;
}
