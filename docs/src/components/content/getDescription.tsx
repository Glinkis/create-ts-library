import * as React from "react";

export function getDescription(obj: JSDocComment | CommentTag) {
  if (!obj.description || !obj.description.children) return;

  const descriptions = obj.description.children.map(getParagraph);

  return <div>{descriptions}</div>;
}

function getParagraph(child) {
  return child.children.map(child => <p>{child.value}</p>);
}
