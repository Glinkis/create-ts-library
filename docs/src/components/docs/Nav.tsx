import * as React from "react";
import * as API from "../../api.json";
import { NavGroup } from "./nav/NavGroup";
import { NavItem } from "./nav/NavItem";

const navItems = (function() {
  return Object.keys(API).map((key, i) => getMembers(API[key], i));
})();

export const Nav = () => (
  <nav>
    <ul className="col-xs-3 nav">
      {navItems}
    </ul>
  </nav>
);

function getMembers(member: JSDocComment, i: number) {
  if (!member.name) {
    return null;
  }

  const hierarchy = member.path.map(path => path.name);
  const path = "/docs/" + hierarchy.reduce((acc, next) => acc + "/" + next);
  const members = getMemberGroup(member.members.static);

  return <NavItem key={i} path={path} name={member.name}>{members}</NavItem>;
}

function getMemberGroup(members: Array<JSDocComment>) {
  if (!members.length) {
    return null;
  }
  return <NavGroup>{members.map(getMembers)}</NavGroup>;
}
