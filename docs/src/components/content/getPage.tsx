import * as React from "react";
import { getDemo } from "./getDemo";
import { getDescription } from "./getDescription";
import { getExamples } from "./getExamples";
import { getHeading } from "./getHeading";
import { getParameterTable } from "./getParameterTable";
import { getReturns } from "./getReturns";

export function getPage(comment: IJsDocComment) {
  return (
    <div>
      {getHeading(comment)}
      {getDescription(comment)}
      {getParameterTable(comment)}
      {getReturns(comment)}
      <hr />
      {getDemo(comment)}
      {getExamples(comment)}
    </div>
  );
}
