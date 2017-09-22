import * as React from "react";
import { intersperse } from "../../../../src/array/intersperse";
import { getParameterType } from "./getParameterType";
import { getTypeLink } from "./getTypeLink";

export function getTypeApplication(type: DoctrineType): JSX.Element | null {
  if (!type.expression || !type.expression.name || !type.applications) {
    return null;
  }

  const main = getTypeLink(type.expression.name);
  const applications = type.applications.map(getParameterType);

  return (
    <span>
      {main}
      {"<"}
      {intersperse(applications, ", ")}
      {">"}
    </span>
  );
}
