import React from "react";
import { getTypeLink } from "./getTypeLink";
import { intersperse } from "../../../../../src/array/intersperse";

/**
 * @param {DoctrineType} type
 * @param {number?} i
 * @returns {*}
 */
export function getParameterType(type, i) {
  let value;
  if (type.type === "AllLiteral") {
    value = "any";
  } else if (type.type === "ArrayType") {
    value = getArrayType(type);
  } else if (type.type === "RecordType") {
    value = getRecordType(type);
  } else if (type.type === "TypeApplication") {
    value = getTypeApplication(type);
  } else if (type.type) {
    value = getTypeLink(type.name);
  } else {
    value = "void";
  }

  if (value.props && i != null) {
    value = React.cloneElement(value, { key: i });
  }

  return value;
}

/**
 * @param {DoctrineType} type
 * @returns {XML}
 */
function getArrayType(type) {
  const elements = type.elements.map((element, i) =>
    React.cloneElement(getTypeLink(element.name), { key: i })
  );

  return <span>[ {intersperse(elements, ", ")} ]</span>;
}

/**
 * @param {DoctrineType} type
 * @returns {XML}
 */
function getRecordType(type) {
  const elements = type.fields.map((field, i) => {
    return React.cloneElement(getTypeLink(field.key), { key: i });
  });

  const open = "{ ";
  const close = " }";

  return <span>{open}{intersperse(elements, ", ")}{close}</span>;
}

/**
 * @param {DoctrineType} type
 * @returns {XML}
 */
function getTypeApplication(type) {
  const elements = type.applications.map(getParameterType);
  const main = getTypeLink(type.expression.name);
  const open = "<";
  const close = ">";

  return <span>{main}{open}{elements}{close}</span>;
}
