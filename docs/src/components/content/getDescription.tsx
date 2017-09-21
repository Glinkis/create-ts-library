import * as React from "react";

export function getDescription(comment: JSDocComment | CommentTag) {
  if (!comment.description || !comment.description.children) {
    return null;
  }

  const descriptions = comment.description.children.map(getParagraph);

  return <div>{descriptions}</div>;
}

function getParagraph(child: { children: any[] }) {
  return child.children.map(child => {
    switch (child.type) {
      case "text":
        return <span>{child.value}</span>;
      case "link":
        return (
          <span>
            <a href={child.url}>{child.title ? child.title : child.url}</a>
          </span>
        );
      case "linkReference":
        return (
          <span>
            {"["}
            {child.identifier}
            {"]"}
          </span>
        );
    }
  });
}
