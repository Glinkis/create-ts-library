import React from "react";
import { getHeading } from "./getHeading";
import { getReturns } from "./getReturns";
import { getParameterTable } from "./getParameterTable";
import { getDescription } from "./getDescription";

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
  </div>
);
