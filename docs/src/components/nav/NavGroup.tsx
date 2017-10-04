import * as React from "react";

interface INavGroupProps {
  className?: string;
  children?: any;
}

const navGroupStyle: React.CSSProperties = {
  marginLeft: "5pt"
};

export function NavGroup(props: INavGroupProps) {
  const classes = "nav " + (props.className || "");

  return (
    <ul className={classes} style={navGroupStyle}>
      {props.children}
    </ul>
  );
}
