import * as React from "react";
import { intersperse } from "../../../../src/array/intersperse";
import { getTypeLink } from "./getTypeLink";

export function getFunctionType(type: DoctrineType): JSX.Element {
  const params = (type.params as any[]).map(param => {
    return param.expression
      ? param.name + ":" + param.expression.name
      : param.name;
  }) as string[];

  const split = params.map(name => name.split(":"));

  const mapped = split.map(type => {
    const typeLink =
      type.length === 2 ? (
        <span>
          {": "}
          {getTypeLink(type[1])}
        </span>
      ) : null;

    return (
      <span>
        {type[0]}
        {typeLink}
      </span>
    );
  });

  return (
    <span>
      {getTypeLink("function")}
      {"("}
      {intersperse(mapped, ", ")}
      {")"}
    </span>
  );
}
