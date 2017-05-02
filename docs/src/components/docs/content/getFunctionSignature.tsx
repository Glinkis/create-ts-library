import * as React from "react";
import { intersperse } from "../../../../../src/array/intersperse";

export function getFunctionSignature(func: JSDocComment) {
  const params = intersperse(
    func.params.map((p, i) => <span key={i}>{p.name}</span>),
    ", "
  );

  return <span>{"("}{params}{")"}</span>;
}
