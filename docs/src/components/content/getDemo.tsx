import * as React from "react";
import * as jslib from "../../../../src";
import { MathDemo } from "../demo/MathDemo";
import { SplinesDemo } from "../demo/SplinesDemo";

export function getDemo(comment: JSDocComment) {
  const method = getMethodFromPath(jslib, comment);

  if (findPathName(comment, "math")) {
    return <MathDemo method={method} params={comment.params} />;
  } else if (findPathName(comment, "easing")) {
    return <MathDemo method={method} params={comment.params} />;
  } else if (findPathName(comment, "splines")) {
    return <SplinesDemo method={method} params={comment.params} />;
  }
}

function findPathName(obj: any, name: string) {
  return obj.path.find((path: any) => path.name === name) && obj.name !== name;
}

function getMethodFromPath(sourceObject: any, comment: JSDocComment): Function {
  if (!comment.path) {
    return () => null;
  }

  let method = sourceObject;
  comment.path.map(path => path.name).forEach(level => (method = method[level]));

  if (typeof method === "function") {
    return method;
  }

  return () => null;
}
