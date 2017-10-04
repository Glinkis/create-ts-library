import * as React from "react";
import { intersperse } from "../../../../src/array/intersperse";
import { getArrayType } from "./getArrayType";
import { getFieldType } from "./getFieldType";
import { getFunctionType } from "./getFunctionType";
import { getRecordType } from "./getRecordType";
import { getTypeApplication } from "./getTypeApplication";
import { getTypeLink } from "./getTypeLink";

export function getParameterType(
  type: IDoctrineType,
  i: number
): JSX.Element | null {
  let value = null;

  if (type.type === "AllLiteral") {
    value = <span>any</span>;
  } else if (type.type === "FunctionType") {
    value = getFunctionType(type);
  } else if (type.type === "ArrayType") {
    value = getArrayType(type);
  } else if (type.type === "RecordType") {
    value = getRecordType(type);
  } else if (type.type === "TypeApplication") {
    value = getTypeApplication(type);
  } else if (type.type === "FieldType" && type.key) {
    value = getFieldType(type);
  } else if (type.type && type.name) {
    value = getTypeLink(type.name);
  }

  if (value && value.props && i != null) {
    value = React.cloneElement(value, { key: i });
  }

  return value;
}
