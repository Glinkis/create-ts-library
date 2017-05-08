import * as React from "react";
import { CSSProperties } from "react";

interface NavGroupProps {
  className?: string,
  children?: any
}

export function NavGroup(props: NavGroupProps) {
  const classes = "nav " + (props.className || "");
  const style: CSSProperties = {
    marginLeft: "5pt"
  };

  return (
    <ul className={classes} style={style}>
      {props.children}
    </ul>
  );
}
