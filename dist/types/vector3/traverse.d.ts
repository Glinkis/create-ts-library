/**
 * Loops through the dimensions of a vector.
 * Starts at zero, so keep in mind that the number of callbacks will be the dimension sizes +1;
 *
 * @memberof vector3
 *
 * @param {{ x: number, y: number, z: number }} vector - Vector to traverse.
 * @param {function({ x: number, y: number, z: number })} callback - Callback for each step.
 * @param {number?} step - Step size (default: 1).
 */
export declare function traverse(vector: any, callback: any, step?: number): void;
