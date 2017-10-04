import * as React from "react";
import { getParameterType } from "./getParameterType";

export function getReturns(comment: IJsDocComment): JSX.Element | null {
  if (!comment.returns.length) {
    return null;
  }

  const returnTypes = comment.returns.map(r => r.type).map(getParameterType);

  return <h4>Returns {returnTypes}.</h4>;
}
