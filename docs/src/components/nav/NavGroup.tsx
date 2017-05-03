import * as React from "react";

export interface INavGroupProps {
  className?: string,
  children?: any
}

export function NavGroup(props: INavGroupProps) {
  const classes = "nav " + (props.className || "");
  const style = { marginLeft: "5pt" };

  return (
    <ul className={classes} style={style}>
      {props.children}
    </ul>
  );
}
