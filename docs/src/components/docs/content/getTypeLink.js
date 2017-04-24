import React from "react";

/**
 * @param {string} type
 */
export const getTypeLink = type => {
  const href = "https://developer.mozilla.org/en-US/search?q=" + type;
  return <a target={"_blank"} href={href}>{type}</a>;
};
