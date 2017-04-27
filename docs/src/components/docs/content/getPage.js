import React from "react";
import { getDemo } from "./getDemo";
import { getDescription } from "./getDescription";
import { getExamples } from "./getExamples";
import { getHeading } from "./getHeading";
import { getParameterTable } from "./getParameterTable";
import { getReturns } from "./getReturns";

/**
 * @param {JSDocComment} obj
 * @returns {XML}
 */
export const getPage = obj => (
  <div>
    {getHeading(obj)}
    {getDescription(obj)}
    {getParameterTable(obj)}
    {getReturns(obj)}
    <hr />
    {getDemo(obj)}
    {getExamples(obj)}
  </div>
);
