import React from "react";
import { intersperse } from "../../../../../src/array/intersperse";
import { getParameterType } from "./getParameterType";

/**
 * @param {JSDocComment} func
 * @returns {XML}
 */
export function getFunctionSignature(func) {
  const params = intersperse(
    func.params.map((p, i) => (
      <span key={i}>{p.name} : {getParameterType(p.type, i)}</span>
    )),
    ", "
  );
  const returns = intersperse(
    func.returns.map((r, i) => getParameterType(r.type, i)),
    ", "
  );
  return <span>( {params} ) : {returns}</span>;
}
