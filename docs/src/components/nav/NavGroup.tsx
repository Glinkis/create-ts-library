import * as React from "react";
import { CSSProperties } from "react";

export interface INavGroupProps {
  className?: string,
  children?: any
}

export function NavGroup(props: INavGroupProps) {
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
