import * as React from "react";
import { NavLink, Route } from "react-router-dom";
import { CSSProperties } from "react";

export interface INavItemProps {
  className?: string,
  children?: any,
  name: string,
  path: string,
  component?: any
}

export function NavItem (props: INavItemProps) {
  const { className, children, name, path, component }: INavItemProps = props;
  const classes = "nav-item " + (className || "");
  const activeStyle: CSSProperties = {
    fontSize: "13pt",
    fontWeight: "bolder",
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
