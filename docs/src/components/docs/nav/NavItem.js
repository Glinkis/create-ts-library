import React from "react";
import { NavLink, Route } from "react-router-dom";

export const NavItem = props => {
  const { className, children, name, path, component } = props;
  const route = component ? <Route path={path} component={component} /> : null;
  const classes = "nav-item " + (className || "");

  return (
    <li className={classes}>
      <NavLink
        className="nav-link"
        style={{ opacity: "0.4" }}
        activeStyle={{ opacity: null }}
        to={path}
      >
        {name}
      </NavLink>
      {route}
      {children}
    </li>
  );
};
