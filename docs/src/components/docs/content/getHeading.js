import React from "react";
import { intersperse } from "../../../../../src/array/intersperse";
import { getParameterType } from "./getParameterType";

/**
 * @param {JSDocComment} obj
 * @returns {XML}
 */
export function getHeading(obj) {
  const signature = obj.kind === "function" && getFunctionSignature(obj);

  return (
    <div className="panel-heading">
      <span className="panel-title">
        {obj.name}
        {signature}
      </span>
    </div>
  );
}

/**
 * @param {JSDocComment} func
 * @returns {XML}
 */
function getFunctionSignature(func) {
  const params = intersperse(func.params.map(getParameterType), ", ");
  const returns = intersperse(func.returns.map(getParameterType), ", ");
  return <span>( {params} ) : {returns}</span>;
}
