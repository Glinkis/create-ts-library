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

export function getParameterTable(obj: JSDocComment) {
  if (obj.params.length === 0 || obj.kind === "module") return null;

  const body = obj.params.map((param, i) => (
    <tr key={i}>
      <td>{param.name}</td>
      <td>{getParameterType(param.type, i)}</td>
      <td>{getDescription(param)}</td>
    </tr>
  ));

  return (
    <div className="panel panel-default">
      <div className="panel-heading">
        <span className="panel-title">Arguments</span>
      </div>
      <table className="panel-body table">
        {head}
        <tbody>{body}</tbody>
      </table>
    </div>
  );
}
