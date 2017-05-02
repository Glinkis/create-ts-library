import * as React from "react";
import { NavLink, Route } from "react-router-dom";

export const NavItem = props => {
  const { className, children, name, path, component } = props;
  const classes = "nav-item " + (className || "");

  return (
    <li className={classes}>
      <NavLink
        className="nav-link"
        activeStyle={{
          fontSize: "13pt",
          fontWeight: "600",
          fontStyle: "oblique"
        }}
        to={path}
      >
        {name}
      </NavLink>
      <Route path={path} component={component} />
      <Route path={path} component={() => children} />
    </li>
  );
};
