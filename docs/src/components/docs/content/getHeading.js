import React from "react";
import { getFunctionSignature } from "./getFunctionSignature";

/**
 * @param {JSDocComment} obj
 * @returns {XML}
 */
export function getHeading(obj) {
  const signature = obj.kind === "function" && getFunctionSignature(obj);

  return (
    <div className="panel-heading">
      <span className="panel-title">
        {obj.name}{signature}
      </span>
    </div>
  );
}
