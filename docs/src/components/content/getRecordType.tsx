import * as React from "react";
import { intersperse } from "../../../../src/array/intersperse";
import { getParameterType } from "./getParameterType";

export function getRecordType(type: DoctrineType): JSX.Element {
  const fields = (type.fields || []).map(getParameterType);
  return (
    <span>
      {"{ "}
      {intersperse(fields, ", ")}
      {" }"}
    </span>
  );
}
