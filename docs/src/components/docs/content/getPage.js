import React from "react";
import { getHeading } from "./getHeading";
import { getBody } from "./getBody";

/**
 * @param {JSDocComment} obj
 * @returns {XML}
 */
export const getPage = obj => (
  <div className="panel panel-default">
    {getHeading(obj)}
    {getBody(obj)}
  </div>
);
