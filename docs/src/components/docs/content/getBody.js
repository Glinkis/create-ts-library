import React from "react";
import { getFunctionParam } from "./getFunctionParam";

/**
 * @param {JSDocComment} obj
 * @returns {XML}
 */
const getDescription = obj => {
  if (obj.description.children == null) {
    return null;
  }
  const descriptions = obj.description.children.map(child =>
    child.children.map(child => <p>{child.value}</p>)
  );

  return <span>{descriptions}</span>;
};

/**
 * @param {JSDocComment} obj
 * @returns {XML}
 */
const getParameters = obj => {
  if (obj.params.length === 0) {
    return null;
  }

  const head = (
    <tr>
      <th>Name</th>
      <th>Type</th>
      <th>Default Value</th>
    </tr>
  );

  const body = (
    <tr>
      <td>Name 1</td>
      <td>Type 1</td>
      <td>Value 1</td>
    </tr>
  );

  return (
    <table className="table">
      <thead className="thead-default">{head}</thead>
      <tbody>{body}</tbody>
    </table>
  );
};

/**
 * @param {JSDocComment} obj
 * @returns {XML}
 */
const getReturns = obj => {
  if (obj.returns.length === 0) {
    return null;
  }
  const returns = obj.returns.map(getFunctionParam);

  return <h4>Returns {returns}.</h4>;
};

/**
 * @param {JSDocComment} obj
 * @returns {XML}
 */
export const getBody = obj => (
  <div className="panel-body">
    {getDescription(obj)}
    {getParameters(obj)}
    {getReturns(obj)}
  </div>
);
