import * as React from "react";
import { getDescription } from "./getDescription";
import { getParameterType } from "./getParameterType";

const head = (
  <thead className="thead-default">
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  </thead>
);

export function getParameterTable(comment: IJsDocComment): JSX.Element | null {
  if (comment.params.length === 0 || comment.kind === "module") {
    return null;
  }

  const tables = comment.params.map(param => {
    if (param.properties) {
      return getObjectProperties(param.name, param.properties);
    }
  });

  return (
    <div>
      {getTable("Arguments", comment.params.map(getTableRow))}
      {tables}
    </div>
  );
}

function getTable(title: any, content: JSX.Element[]) {
  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        <span className="panel-title">{title}</span>
      </div>
      <table className="panel-body table x">
        {head}
        <tbody>{content}</tbody>
      </table>
    </div>
  );
}

function getTableRow(commentTag: ICommentTag, i: number): JSX.Element {
  const type = getParameterType(commentTag.type, i);
  return (
    <tr key={i}>
      <td>{commentTag.name}</td>
      <td>{type}</td>
      <td>{getDescription(commentTag)}</td>
    </tr>
  );
}

function getObjectProperties(name: any, properties: ICommentTag[]) {
  properties.map(property => shortenPropertyName(name, property));
  return getTable(name, properties.map(getTableRow));
}

function shortenPropertyName(
  parentName: string,
  property: ICommentTag
): ICommentTag {
  property.name = (property.name as string).replace(parentName, "");
  property.name = (property.name as string).replace(".", "");
  return property;
}
