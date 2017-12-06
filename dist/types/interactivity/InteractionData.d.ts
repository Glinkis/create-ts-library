/** @module interactivity */
/**
 * Class representing the data for an interaction event.
 * @private
 */
export declare class InteractionData {
    element: HTMLElement;
    startX: number;
    startY: number;
    currentX: number;
    currentY: number;
    previousX: number;
    previousY: number;
    relativeX: number;
    relativeY: number;
    transitionX: number;
    transitionY: number;
    compoundX: number;
    compoundY: number;
    previousCompoundX: number;
    previousCompoundY: number;
    endX: number;
    endY: number;
    velocityX: number;
    velocityY: number;
    constructor(element: HTMLElement);
    start(x: number, y: number): void;
    update(x: number, y: number): void;
    end(x: number, y: number): void;
    private setRelative();
    private setTransition();
    private setCompound();
    private setVelocity();
}
