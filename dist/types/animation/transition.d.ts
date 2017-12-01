import { linear } from "../animation/easing";
/**
 * Changes a value over time, running a callback with the current value at every frame.
 *
 * @memberof animation
 *
 * @param {number} startValue - Start value.
 * @param {number} endValue - End value.
 * @param {number} duration - Time of the transition. (ms)
 * @param {function(value: number): void} callback - Executes every step of the transition.
 * @param {function(t: number): number} easing - Easing method.
 */
export declare function transition(startValue: any, endValue: any, duration: any, callback: any, easing?: typeof linear): void;
