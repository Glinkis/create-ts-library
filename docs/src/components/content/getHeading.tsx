import * as React from "react";
import { getFunctionSignature } from "./getFunctionSignature";

const headingStyle: React.CSSProperties = { fontWeight: 600 };

export function getHeading(comment: JSDocComment) {
  const signature =
    comment.kind === "function" && getFunctionSignature(comment);

  return (
    <h3 style={headingStyle}>
      {comment.name}
      {signature}
    </h3>
  );
}
