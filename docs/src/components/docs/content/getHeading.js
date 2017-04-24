import React from "react";
import { intersperse } from "../../../../../src/array/intersperse";
import { getFunctionParam } from "./getFunctionParam";

/**
 * @param {JSDocComment} obj
 * @returns {XML}
 */
const getHeadingTrail = obj => {
  if (obj.kind !== "function") {
    return null;
  }

  const params = intersperse(obj.params.map(getFunctionParam), ", ");
  const returns = intersperse(obj.returns.map(getFunctionParam), ", ");

  return (
    <span>
      ({params})
      : {returns}
    </span>
  );
};

/**
 * @param {JSDocComment} obj
 * @returns {XML}
 */
export const getHeading = obj => (
  <div className="panel-heading">
    <span className="panel-title">
      {obj.name}
      {getHeadingTrail(obj)}
    </span>
  </div>
);
