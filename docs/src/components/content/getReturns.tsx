import * as React from "react";
import { getParameterType } from "./getParameterType";

export function getReturns(obj: JSDocComment) {
  if (!obj.returns.length) {
    return null;
  }

  const returns = obj.returns
    .map(r => r.type)
    .map(getParameterType);

  return <h4>Returns {returns}.</h4>;
}
