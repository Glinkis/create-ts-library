import * as React from "react";
import { getArrayType } from "./getArrayType";
import { getFieldType } from "./getFieldType";
import { getFunctionType } from "./getFunctionType";
import { getNullableType } from "./getNullableType";
import { getRecordType } from "./getRecordType";
import { getTypeApplication } from "./getTypeApplication";
import { getTypeLink } from "./getTypeLink";

function getParam(param: any) {
  let name;
  if (param.expression) {
    name = param.name + ":" + param.expression.name;
  } else {
    name = param.name;
  }

  name = name.split(":");

  const typeLink =
    name.length === 2 ? (
      <span>
        {": "}
        {getTypeLink(name[1])}
      </span>
    ) : null;

  return (
    <span>
      {name[0]}
      {typeLink}
    </span>
  );
}

export function getParameterType(
  type: IDoctrineType,
  i: number
): JSX.Element | null {
  let value = null;

  if (type.type === "AllLiteral") {
    value = <span>any</span>;
  } else if (type.type === "ParameterType") {
    value = getParam(type);
  } else if (type.type === "FunctionType") {
    value = getFunctionType(type);
  } else if (type.type === "NullableType") {
    value = getNullableType(type);
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
