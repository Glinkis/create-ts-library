import React from "react";
import { NavItem } from "./nav/NavItem";
import * as API from "src";

const getNavItems = () => {
  return Object.keys(API).map((key, i) => {
    if (!API[key].name) return;
    return <NavItem key={i} path="/docs/" name={API[key].name} />;
  });
};

export const Nav = () => (
  <nav>
    <ul className="col-xs-4">
      {getNavItems()}
    </ul>
  </nav>
);
