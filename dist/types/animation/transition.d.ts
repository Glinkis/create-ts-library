/**
 * Changes a value over time, running a callback with the current value at every frame.
 *
 * @param startValue - Start value.
 * @param endValue - End value.
 * @param duration - Time of the transition. (ms)
 * @param callback - Executes every step of the transition.
 * @param easing - Easing method.
 */
export declare function transition(startValue: number, endValue: number, duration: number, callback: (value: number) => void, easing?: (t: number) => number): void;
