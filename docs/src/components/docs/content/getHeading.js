import React from "react";
import { intersperse } from "../../../../../src/array/intersperse";
import { getFunctionParam } from "./getFunctionParam";

/**
 * @param {JSDocComment} func
 * @returns {XML}
 */
const getFunctionSignature = func => {
  const params = intersperse(func.params.map(getFunctionParam), ", ");
  const returns = intersperse(func.returns.map(getFunctionParam), ", ");
  return <span>( {params} ) : {returns}</span>;
};

/**
 * @param {JSDocComment} obj
 * @returns {XML}
 */
export const getHeading = obj => {
  const signature = obj.kind === "function" && getFunctionSignature(obj);

  return (
    <div className="panel-heading">
      <span className="panel-title">
        {obj.name}
        {signature}
      </span>
    </div>
  );
};
