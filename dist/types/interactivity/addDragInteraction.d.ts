/**
 * Sets up the required events and listeners for a complete drag interaction.
 *
 * @memberof interactivity
 *
 * @param {HTMLElement} element - The element to attach the events to,
 * @param {object} callbacks - Callbacks that are called when a dragging action occurs.
 * @param {function(event: Event, data: InteractionData)} callbacks.onStart - Called when dragging starts.
 * @param {function(event: Event, data: InteractionData)} callbacks.onMove - Called when dragging occurs.
 * @param {function(event: Event, data: InteractionData)} callbacks.onEnd - Called when dragging stops.
 */
export declare function addDragInteraction(element: any, callbacks: any): void;
