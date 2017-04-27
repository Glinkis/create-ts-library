import React from "react";

/**
 * @param {JSDocComment | CommentTag} obj
 * @returns {XML}
 */
export function getDescription(obj) {
  if (obj.description == null || obj.description.children == null) {
    return null;
  }

  const descriptions = obj.description.children.map(child =>
    child.children.map(child => <p>{child.value}</p>)
  );

  return <div>{descriptions}</div>;
}
