import * as React from "react";
import { getParameterType } from "./getParameterType";

export function getReturns(comment: JSDocComment) {
  console.log(comment.returns);
  if (!comment.returns.length) {
    return null;
  }

  const returns = comment.returns.map(r => r.type).map(getParameterType);

  return <h4>Returns {returns}.</h4>;
}
