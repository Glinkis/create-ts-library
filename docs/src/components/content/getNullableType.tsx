import * as React from "react";
import { getTypeLink } from "./getTypeLink";

export function getNullableType(type: any): JSX.Element {
  return (
    <span>
      {getTypeLink(type.expression.name)}
      {"(optional)"}
    </span>
  );
}
