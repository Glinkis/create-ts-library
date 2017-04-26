import React from "react";

export const NavGroup = ({ className, children }) => {
  const classes = "nav " + (className || "");
  const style = { marginLeft: "5pt" };

  return (
    <ul className={classes} style={style}>
      {children}
    </ul>
  );
};
