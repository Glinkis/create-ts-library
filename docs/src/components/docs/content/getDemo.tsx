import * as React from "react";
import * as jslib from "../../../../../src";
import { MathCalculationForm } from "../../demo/MathCalculationForm";

export function getDemo(obj: JSDocComment) {
  let method = jslib;
  obj.path.map(path => path.name).forEach(level => (method = method[level]));

  if (findPathName(obj, "math")) {
    return <MathCalculationForm step={1} method={method} params={obj.params} />;
  } else if (findPathName(obj, "easing")) {
    return <MathCalculationForm step={0.1} method={method} params={obj.params} />;
  }

  return null;
}

function findPathName(obj: any, name: string) {
  return obj.path.find(path => path.name === name) && obj.name !== name;
}
