import React from "react";
import { getDescription } from "./getDescription";
import { getParameterType } from "./getParameterType";

/**
 * @param {JSDocComment} obj
 * @returns {XML}
 */
export function getParameterTable(obj) {
  if (obj.params.length === 0 || obj.kind === "module") {
    return null;
  }

  const head = (
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Description</th>
    </tr>
  );

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
        <thead className="thead-default">{head}</thead>
        <tbody>{body}</tbody>
      </table>
    </div>
  );
}
