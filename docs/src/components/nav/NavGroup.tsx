import * as React from "react";

interface NavGroupProps {
  className?: string;
  children?: any;
}

const navGroupStyle: React.CSSProperties = {
  marginLeft: "5pt"
};

export function NavGroup(props: NavGroupProps) {
  const classes = "nav " + (props.className || "");

  return (
    <ul className={classes} style={navGroupStyle}>
      {props.children}
    </ul>
  );
}
