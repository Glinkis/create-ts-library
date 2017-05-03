import * as React from "react";
import { intersperse } from "../../../../src/array/intersperse";

export function getFunctionSignature(func: JSDocComment) {
  const params = intersperse(func.params.map(getParameter), ", ");
  return <span>{"("}{params}{")"}</span>;
}

function getParameter(param: CommentTag, i: number) {
  return <span key={i}>{param.name}</span>;
}