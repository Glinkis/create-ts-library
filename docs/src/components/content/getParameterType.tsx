import * as React from "react";
import { intersperse } from "../../../../src/array/intersperse";
import { getTypeLink } from "./getTypeLink";

export function getParameterType(type: DoctrineType, i: number) {
  let value: JSX.Element | null = null;

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
    value = getTypeLink(type.key);
  } else if (type.type && type.name) {
    value = getTypeLink(type.name);
  }

  if (value && value.props && i != null) {
    value = React.cloneElement(value, { key: i });
  }

  return value;
}

function getFunctionType(type: DoctrineType): JSX.Element {
  const params = (type.params as any)
    .map((param: any) => param.name)
    .map((name: string) =>
      name.split(":").map((type, i) => {
        return i > 0 ? (
          <span>
            {": "}
            {getTypeLink(type)}
          </span>
        ) : (
          type
        );
      })
    );

  return (
    <span>
      {getTypeLink("function")}
      {"("}
      {intersperse(params, ", ")}
      {")"}
    </span>
  );
}

function getArrayType(type: DoctrineType): JSX.Element {
  const open = "[ ";
  const elements = (type.elements || []).map(getParameterType);
  const close = " ]";

  return (
    <span>
      {open}
      {intersperse(elements, ", ")}
      {close}
    </span>
  );
}

function getRecordType(type: DoctrineType): JSX.Element {
  const open = "{ ";
  const fields = (type.fields || []).map(getParameterType);
  const close = " }";

  return (
    <span>
      {open}
      {intersperse(fields, ", ")}
      {close}
    </span>
  );
}

function getTypeApplication(type: DoctrineType): JSX.Element | null {
  if (!type.expression || !type.expression.name || !type.applications) {
    return null;
  }

  const main = getTypeLink(type.expression.name);
  const open = "<";
  const applications = type.applications.map(getParameterType);
  const close = ">";

  return (
    <span>
      {main}
      {open}
      {intersperse(applications, ", ")}
      {close}
    </span>
  );
}
