import * as React from "react";
import * as jslib from "../../../../src";
import { MathCalculationForm } from "../demo/MathCalculationForm";

export function getDemo(obj: JSDocComment) {
  const method = getMethodFromPath(jslib, obj);

  if (findPathName(obj, "math")) {
    return getMathDemo(obj, method);
  } else if (findPathName(obj, "easing")) {
    return getEasingDemo(obj, method);
  }
}

function getMathDemo(obj: JSDocComment, method: Function) {
  return <MathCalculationForm step={1} method={method} params={obj.params} />;
}

function getEasingDemo(obj: JSDocComment, method: Function) {
  return <MathCalculationForm step={0.1} method={method} params={obj.params} />;
}

function findPathName(obj: any, name: string) {
  return obj.path.find(path => path.name === name) && obj.name !== name;
}

function getMethodFromPath(sourceObject: Object, obj: JSDocComment): Function {
  let method = jslib;
  obj.path.map(path => path.name).forEach(level => (method = method[level]));

  if (typeof method === "function") {
    return method;
  }
}