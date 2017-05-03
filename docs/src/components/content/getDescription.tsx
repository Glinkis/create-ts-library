import * as React from "react";

export function getDescription(obj: JSDocComment | CommentTag) {
  if (!obj.description || !obj.description.children) return null;

  const descriptions = obj.description.children.map(getParagraph);

  return <div>{descriptions}</div>;
}

function getParagraph(child: { children: { value: string }[] }) {
  return child.children.map(child => <p>{child.value}</p>);
}
