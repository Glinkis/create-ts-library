import React from "react";
import { intersperse } from "../../../../../src/array/intersperse";
import { getTypeLink } from "./getTypeLink";

/**
 * @param {RecordType} obj
 * @returns {XML}
 */
export const getRecordType = obj => {
  const elements = obj.fields.map((field, i) => getTypeLink(field.key));

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
