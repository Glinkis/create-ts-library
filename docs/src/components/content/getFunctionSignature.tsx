import * as React from "react";
import { intersperse } from "../../../../src/array/intersperse";

export function getFunctionSignature(comment: JSDocComment) {
  const params = intersperse(comment.params.map(getParameter), ", ");
  return (
    <span>
      {"("}
      {params}
      {")"}
    </span>
  );
}

function getParameter(commentTag: CommentTag, i: number) {
  return <span key={i}>{commentTag.name}</span>;
}
