import React from "react";
import { intersperse } from "../../../../../src/array/intersperse";

/**
 * @param {JSDocComment} func
 * @returns {XML}
 */
export function getFunctionSignature(func) {
  const params = intersperse(
    func.params.map((p, i) => <span key={i}>{p.name}</span>),
    ", "
  );
  return <span>({params})</span>;
}
