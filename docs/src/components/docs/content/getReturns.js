import React from "react";
import { getParameterType } from "./getParameterType";

/**
 * @param {JSDocComment} obj
 * @returns {XML}
 */
export function getReturns(obj) {
  if (obj.returns.length === 0) {
    return null;
  }
  const returns = obj.returns.map((r, i) => getParameterType(r.type, i));

  return <h4>Returns {returns}.</h4>;
}
