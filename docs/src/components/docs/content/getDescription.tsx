import * as React from "react";

export function getDescription(obj: JSDocComment | CommentTag) {
  if (obj.description == null || obj.description.children == null) {
    return null;
  }

  const descriptions = obj.description.children.map(child =>
    child.children.map(child => <p>{child.value}</p>)
  );

  return <div>{descriptions}</div>;
}
