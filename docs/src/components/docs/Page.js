import React from "react";

export const Page = ({ className, children }) => {
  const classes = "page" + className;
  return (
    <div className={classes}>
      {children}
    </div>
  );
};
