import React from "react";
import { NavLink, Route } from "react-router-dom";

export const NavItem = props => {
  const { className, children, name, path, component } = props;
  const route = component ? <Route path={path} component={component} /> : null;

  const classes = "list-group-item " + (className || "");
  const style = {
    padding: component ? "0" : "4pt",
    border: component ? "none" : null
  };

  return (
    <li className={classes} style={style}>
      <NavLink className="list-group-item" to={path}>
        {name}
      </NavLink>
      {route}
      {children}
    </li>
  );
};
