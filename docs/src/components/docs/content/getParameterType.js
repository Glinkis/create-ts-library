import React from "react";
import { getTypeLink } from "./getTypeLink";
import { intersperse } from "../../../../../src/array/intersperse";

/**
 * @param {CommentTag} param
 * @param {number?} i
 * @returns {*}
 */
export function getParameterType(param, i) {
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
}

/**
 * @param {DoctrineType} obj
 * @returns {XML}
 */
function getArrayType(obj) {
  const elements = obj.elements.map((element, i) =>
    React.cloneElement(getTypeLink(element.name), { key: i })
  );

  return <span>[ {intersperse(elements, ", ")} ]</span>;
}

/**
 * @param {DoctrineType} obj
 * @returns {XML}
 */
function getRecordType(obj) {
  const elements = obj.fields.map((field, i) => {
    return React.cloneElement(getTypeLink(field.key), { key: i });
  });

  const open = "{ ";
  const close = " }";

  return (
    <span>
      {open}
      {intersperse(elements, ", ")}
      {close}
    </span>
  );
}
