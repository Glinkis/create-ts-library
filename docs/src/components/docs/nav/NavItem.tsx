import * as React from "react";
import { NavLink, Route } from "react-router-dom";

interface NavItemProps {
  className?: string,
  children?: any,
  name: string,
  path: string,
  component?: any
}

export function NavItem (props: NavItemProps) {
  const { className, children, name, path, component }: NavItemProps = props;
  const classes = "nav-item " + (className || "");
  const activeStyle: Object = {
    fontSize: "13pt",
    fontWeight: "600",
    fontStyle: "oblique"
  };

  return (
    <li className={classes}>
      <NavLink className="nav-link" activeStyle={activeStyle} to={path}>
        {name}
      </NavLink>
      <Route path={path} component={component} />
      <Route path={path} component={() => children} />
    </li>
  );
}
