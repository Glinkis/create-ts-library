import React from "react";
import { intersperse } from "../../../../../src/array/intersperse";
import { getTypeLink } from "./getTypeLink";

/**
 * @param {DoctrineType} obj
 * @returns {XML}
 */
export const getArrayType = obj => {
  const elements = obj.elements.map((element, i) =>
    React.cloneElement(getTypeLink(element.name), { key: i })
  );

  return <span>[ {intersperse(elements, ", ")} ]</span>;
};
