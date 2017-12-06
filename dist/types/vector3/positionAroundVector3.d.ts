/** @module vector3 */ /** */
import { IVector3 } from "../vector3";
/**
 * Returns a vector positioned around another vector.
 *
 * @param vector - Center point position.
 * @param distance - Distance from the center point.
 * @param vertical - Vertical radian value.
 * @param horizontal - Horizontal radian value.
 */
export declare function positionAroundVector3(vector: IVector3, distance: number, vertical: number, horizontal: number): IVector3;
