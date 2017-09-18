import * as React from "react";

export function getDescription(comment: JSDocComment | CommentTag) {
  if (!comment.description || !comment.description.children) {
    return null;
  }

  const descriptions = comment.description.children.map(getParagraph);

  return <div>{descriptions}</div>;
}

function getParagraph(child: { children: { value: string }[] }) {
  return child.children.map(child => <p>{child.value}</p>);
}
