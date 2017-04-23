import React from "react";

export const NavGroup = ({ className, children }) => {
  const classes = "list-group " + (className || "");

  return (
    <ul className={classes}>
      {children}
    </ul>
  );
};
