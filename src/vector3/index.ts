/** @module vector3 */

/**
 * Represents a three-dimensional vector.
 */
export interface IVector3 {
  x: number;
  y: number;
  z: number;
}

export * from "./add";
export * from "./distance";
export * from "./divide";
export * from "./dot";
export * from "./length";
export * from "./multiply";
export * from "./negate";
export * from "./pointIntersection";
export * from "./positionAroundVector3";
export * from "./scale";
export * from "./subtract";
export * from "./traverse";
