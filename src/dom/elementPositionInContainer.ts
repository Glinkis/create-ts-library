/** @module dom */

/**
 * Goes through an elements hierarchy to find its position relative to its container.
 *
 * @param element - Element to get the position of.
 * @param container - The container to get the position relative to.
 */
export function elementPositionInContainer(
  element: HTMLElement | null,
  container: HTMLElement
) {
  let top = 0;
  let left = 0;

  do {
    top += element != null ? element.offsetTop : 0;
    left += element != null ? element.offsetLeft : 0;
    element = element != null ? element.parentElement : null;
  } while (element && element !== container);

  return { left, top };
}
