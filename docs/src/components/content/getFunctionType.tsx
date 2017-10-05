import * as React from "react";
import { intersperse } from "../../../../src/array/intersperse";
import { getParameterType } from "./getParameterType";
import { getTypeLink } from "./getTypeLink";

export function getFunctionType(type: IDoctrineType): JSX.Element {
  const params = (type.params as any[]).map(getParameterType);

  return (
    <span>
      {getTypeLink("function")}
      {"("}
      {intersperse(params, ", ")}
      {")"}
    </span>
  );
}
