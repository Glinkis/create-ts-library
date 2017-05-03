import * as React from "react";

export function getTypeLink(type: string) {
  const href = "https://developer.mozilla.org/en-US/search?q=" + type;
  return <a target={"_blank"} href={href}>{type}</a>;
}
