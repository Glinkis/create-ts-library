import React from "react";
import { getArrayType } from "./getArrayType";
import { getRecordType } from "./getRecordType";

/**
 * @param {CommentTag} param
 * @param {number?} i
 * @returns {*}
 */
export const getFunctionParam = (param, i) => {
  const type = param.type.type;

  let value;
  if (param.type.name) {
    value = <a>{param.type.name}</a>;
  } else {
    if (type === "ArrayType") {
      value = getArrayType(param.type);
    } else if (type === "AllLiteral") {
      value = "any";
    } else if (type === "RecordType") {
      value = getRecordType(param.type);
    } else {
      value = "void";
    }
  }

  if (value.props && i != null) {
    value = React.cloneElement(value, { key: i });
  }

  return value;
};
