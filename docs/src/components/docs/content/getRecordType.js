import React from "react";
import { intersperse } from "../../../../../src/array/intersperse";

/**
 * @param {RecordType} obj
 * @returns {XML}
 */
export const getRecordType = obj => {
  console.log(obj);
  const elements = obj.fields.map((field, i) => (
    <a key={i}>{field.key}</a>
  ));

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
