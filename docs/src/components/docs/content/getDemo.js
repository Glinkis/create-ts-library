import React from "react";
import * as jslib from "../../../../../src";
import { MathCalculationForm } from "./demo/MathCalculationForm";

/**
 * @param {JSDocComment} obj
 */
export function getDemo(obj) {
  /** @type {Function} */
  let method = jslib;
  obj.path.map(path => path.name).forEach(level => (method = method[level]));

  if (findPathName(obj, "math")) {
    return <MathCalculationForm method={method} params={obj.params} />;
  }

  return null;
}

/**
 * @param {JSDocComment} obj
 * @param {string} name
 */
function findPathName(obj, name) {
  return obj.path.find(path => path.name === name) && obj.name !== name;
}
