/**
 * Goes through an elements hierarchy to find its position relative to its container.
 *
 * @param element - Element to get the position of.
 * @param container - The container to get the position relative to.
 */
export function getElementPositionInContainer(
  element: HTMLElement,
  container: HTMLElement
) {
  let top = 0;
  let left = 0;

  do {
    top += element.offsetTop || 0;
    left += element.offsetLeft || 0;
    element = element.parentElement;
  } while (element && element !== container);

  return { left, top };
}
