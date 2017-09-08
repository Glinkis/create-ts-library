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

export function getParameterTable(obj: JSDocComment): JSX.Element | null {
  if (obj.params.length === 0 || obj.kind === "module") {
    return null;
  }

  return (
    <div>
      {getTable("Arguments", obj.params.map(getTableRow))}
      {obj.params.map(
        param =>
          param.properties
            ? getObjectProperties(param.name, param.properties)
            : null
      )}
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

function getTableRow(param: CommentTag, i: number): JSX.Element {
  const type = getParameterType(param.type, i);
  return (
    <tr key={i}>
      <td>{param.name}</td>
      <td>{type}</td>
      <td>{getDescription(param)}</td>
    </tr>
  );
}

function getObjectProperties(name: any, properties: Array<CommentTag>) {
  properties.map(property => shortenPropertyName(name, property));
  return getTable(name, properties.map(getTableRow));
}

function shortenPropertyName(
  parentName: string,
  property: CommentTag
): CommentTag {
  property.name = (property.name as string).replace(parentName, "");
  property.name = (property.name as string).replace(".", "");
  return property;
}
