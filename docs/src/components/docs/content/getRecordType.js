import React from "react";
import { intersperse } from "../../../../../src/array/intersperse";
import { getTypeLink } from "./getTypeLink";

/**
 * @param {DoctrineType} obj
 * @returns {XML}
 */
export const getRecordType = obj => {
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
};
