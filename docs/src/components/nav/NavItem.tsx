import * as React from "react";
import { NavLink, Route } from "react-router-dom";

interface INavItemProps {
  className?: string;
  children?: any;
  name: string;
  path: string;
  component?: any;
}

const navItemActiveStyle: React.CSSProperties = {
  fontSize: "13pt",
  fontStyle: "oblique",
  fontWeight: "bolder"
};

export function NavItem(props: INavItemProps) {
  const { className, children, name, path, component } = props;
  const classes = "nav-item " + (className || "");

  return (
    <li className={classes}>
      <NavLink className="nav-link" activeStyle={navItemActiveStyle} to={path}>
        {name}
      </NavLink>
      <Route path={path} component={component} />
      <Route path={path} component={() => children} />
    </li>
  );
}
