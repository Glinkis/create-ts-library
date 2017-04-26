import React from "react";
import { getParameterType } from "./getParameterType";
import { getParameterTable } from "./getParameterTable";
import { getDescription } from "./getDescription";

/**
 * @param {JSDocComment} obj
 * @returns {XML}
 */
export const getBody = obj => (
  <div className="panel-body">
    {getDescription(obj)}
    {getParameterTable(obj)}
    {getReturns(obj)}
  </div>
);

/**
 * @param {JSDocComment} obj
 * @returns {XML}
 */
function getReturns(obj) {
  if (obj.returns.length === 0) {
    return null;
  }
  const returns = obj.returns.map((r, i) => getParameterType(r.type, i));

  return <h4>Returns {returns}.</h4>;
}
