import React from "react";
import { getTypeLink } from "./getTypeLink";
import { intersperse } from "../../../../../src/array/intersperse";

/**
 * @param {DoctrineType} type
 * @param {number?} i
 * @returns {*}
 */
export function getParameterType(type, i) {
  if (type == null) {
    return null;
  }

  let value;
  if (type.type === "AllLiteral") {
    value = "any";
  } else if (type.type === "ArrayType") {
    value = getArrayType(type);
  } else if (type.type === "RecordType") {
    value = getRecordType(type);
  } else if (type.type === "TypeApplication") {
    value = getTypeApplication(type);
  } else if (type.type === "FieldType") {
    value = getTypeLink(type.key);
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
  const open = "[ ";
  const elements = type.elements.map(getParameterType);
  const close = " ]";
  return <span>{open}{intersperse(elements, ", ")}{close}</span>;
}

/**
 * @param {DoctrineType} type
 * @returns {XML}
 */
function getRecordType(type) {
  const open = "{ ";
  const fields = type.fields.map(getParameterType);
  const close = " }";
  return <span>{open}{intersperse(fields, ", ")}{close}</span>;
}

/**
 * @param {DoctrineType} type
 * @returns {XML}
 */
function getTypeApplication(type) {
  const main = getTypeLink(type.expression.name);
  const open = "<";
  const applications = type.applications.map(getParameterType);
  const close = ">";
  return <span>{main}{open}{intersperse(applications, ", ")}{close}</span>;
}
