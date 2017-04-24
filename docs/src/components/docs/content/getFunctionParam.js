import React from "react";
import { getArrayType } from "./getArrayType";
import { getRecordType } from "./getRecordType";
import { getTypeLink } from "./getTypeLink";

/**
 * @param {CommentTag} param
 * @param {number?} i
 * @returns {*}
 */
export const getFunctionParam = (param, i) => {
  const type = param.type.type;

  let value;
  if (type === "AllLiteral") {
    value = "any";
  } else if (type === "ArrayType") {
    value = getArrayType(param.type);
  } else if (type === "RecordType") {
    value = getRecordType(param.type);
  } else if (type) {
    value = getTypeLink(param.type.name);
  } else {
    value = "void";
  }

  if (value.props && i != null) {
    value = React.cloneElement(value, { key: i });
  }

  return value;
};
