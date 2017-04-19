type Position = {
  left: number,
  top: number,
};

/**
 * Goes through an elements hierarchy to find its absolute position.
 *
 * @param element
 * @returns {number, number}
 */
export default function getElementAbsolutePosition(element: HTMLElement): Position {
  let top = 0;
  let left = 0;

  do {
    top += element.offsetTop || 0;
    left += element.offsetLeft || 0;
    element = element.offsetParent as HTMLElement;
  } while (element);

  return { left, top };
};
