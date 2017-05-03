import * as React from "react";

interface NavGroupProps {
  className?: string,
  children?: any
}

export function NavGroup(props: NavGroupProps) {
  const classes = "nav " + (props.className || "");
  const style = { marginLeft: "5pt" };

  return (
    <ul className={classes} style={style}>
      {props.children}
    </ul>
  );
}
