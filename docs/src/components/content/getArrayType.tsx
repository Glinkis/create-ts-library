import * as React from "react";
import { intersperse } from "../../../../src/array/intersperse";
import { getParameterType } from "./getParameterType";

export function getArrayType(type: DoctrineType): JSX.Element {
  const elements = (type.elements || []).map(getParameterType);

  return (
    <span>
      {"[ "}
      {intersperse(elements, ", ")}
      {" ]"}
    </span>
  );
}
