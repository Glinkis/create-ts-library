import * as React from "react";
import { intersperse } from "../../../../src/array/intersperse";
import { objectToArray } from "../../misc/objectToArray";

export function getOutputObject(object: any) {
  const properties = objectToArray(object).map((property, i) =>
    getProperty(property, object[property], i)
  );

  return (
    <span>
      {"{ "}
      {intersperse(properties, ", ")}
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
