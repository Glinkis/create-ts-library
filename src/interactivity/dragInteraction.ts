/** @module interactivity */ /** */
import { mouseAndTouch } from "./mouseAndTouch";
import { positionData } from "./positionData";

/**
 * Sets up the required events and listeners for a complete drag interaction.
 *
 * @param spec - Specification object.
 * @param spec.element - The element to attach the events to,
 * @param spec.onStart - Called when dragging starts.
 * @param spec.onMove - Called when dragging occurs.
 * @param spec.onEnd - Called when dragging stops.
 *
 * @returns Object containing the interaction data.
 */
export function dragInteraction(element: HTMLElement) {
  const position = positionData(element);
  const interaction = mouseAndTouch(element)
    .onMouseStart(e => {
      position.setInitialPosition(e.pageX, e.pageY);
    })
    .onMouseMove(e => {
      position.setUpdatedPosition(e.pageX, e.pageY);
    })
    .onMouseEnd(e => {
      position.setFinalPosition(e.pageX, e.pageY);
    })
    .onTouchStart(e => {
      position.setInitialPosition(e.touches[0].pageX, e.touches[0].pageY);
    })
    .onTouchMove(e => {
      position.setUpdatedPosition(e.touches[0].pageX, e.touches[0].pageY);
    })
    .onTouchEnd(e => {
      position.setFinalPosition(e.touches[0].pageX, e.touches[0].pageY);
    });

  return {
    ...position,
    ...interaction
  };
}
