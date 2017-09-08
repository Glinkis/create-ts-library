import * as React from "react";
import { getFunctionSignature } from "./getFunctionSignature";

export function getHeading(obj: JSDocComment) {
  const signature = obj.kind === "function" && getFunctionSignature(obj);
  const style: any = { fontWeight: "600" };

  return (
    <h3 style={style}>
      {obj.name}
      {signature}
    </h3>
  );
}
