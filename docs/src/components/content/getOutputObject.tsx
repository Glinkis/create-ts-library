import * as React from "react";
import { intersperse } from "../../../../src/array/intersperse";

export function getOutputObject(object: any) {
  const properties = Object.keys(object).map((property, i) =>
    getProperty(property, object[property], i)
  );

  return (
    <span>
      {"{ "}
      <span>{intersperse(properties, ", ")}</span>
      {" }"}
    </span>
  );
}

function getProperty(name: string, value: any, key: number) {
  return (
    <span key={key}>
      {name}: {value}
    </span>
  );
}
