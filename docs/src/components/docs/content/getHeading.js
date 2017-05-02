import * as React from "react";
import { getFunctionSignature } from "./getFunctionSignature";

/**
 * @param {JSDocComment} obj
 * @returns {XML}
 */
export function getHeading(obj) {
  const signature = obj.kind === "function" && getFunctionSignature(obj);

  return <h3 style={{ fontWeight: "600" }}>{obj.name}{signature}</h3>;
}
