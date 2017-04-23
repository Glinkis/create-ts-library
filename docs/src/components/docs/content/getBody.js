import React from "react";

/**
 * @param {JSDocComment} obj
 * @returns {XML}
 */
export const getBody = obj => (
  <div className="panel-body">
    <div className="well well-sm">{obj.kind}</div>
  </div>
);
