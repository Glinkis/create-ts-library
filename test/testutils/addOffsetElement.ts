/**
 * Adds a DIV element that gets offset by the defined values.
 *
 * @param parent - Parent element.
 * @param top - Top offset.
 * @param left - Left offset.
 * @param width - Element width.
 * @param height - Element height.
 */
export function addOffsetElement(
  parent: HTMLElement,
  top: number,
  left: number,
  width: number,
  height: number
) {
  const element = document.createElement("div");
  element.style.position = "relative";
  element.style.top = `${top}px`;
  element.style.left = `${left}px`;
  element.style.width = `${width}px`;
  element.style.height = `${height}px`;
  parent.appendChild(element);
  return element;
}
