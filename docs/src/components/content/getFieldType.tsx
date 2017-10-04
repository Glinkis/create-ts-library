import * as React from "react";
import { getTypeLink } from "./getTypeLink";

export function getFieldType(type: IDoctrineType): JSX.Element {
  if (type.key == null) {
    return <span />;
  }

  if (type.value != null) {
    return (
      <span>
        {type.key}
        {": "}
        {getTypeLink(type.value.name)}
      </span>
    );
  }

  return getTypeLink(type.key);
}
