import { InteractionData } from "./InteractionData";
/**
 * Sets up the required events and listeners for a complete drag interaction.
 *
 * @param element - The element to attach the events to,
 * @param callbacks - Callbacks that are called when a dragging action occurs.
 * @param callbacks.onStart - Called when dragging starts.
 * @param callbacks.onMove - Called when dragging occurs.
 * @param callbacks.onEnd - Called when dragging stops.
 */
export declare function addDragInteraction(element: HTMLElement, callbacks: {
    onStart: (event: Event, data: InteractionData) => void;
    onMove: (event: Event, data: InteractionData) => void;
    onEnd: (event: Event, data: InteractionData) => void;
}): void;
