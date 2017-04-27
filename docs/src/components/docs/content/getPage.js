import React from "react";
import { getDescription } from "./getDescription";
import { getHeading } from "./getHeading";
import { getParameterTable } from "./getParameterTable";
import { getReturns } from "./getReturns";
import { getExamples } from "./getExamples";

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
    {getExamples(obj)}
  </div>
);
