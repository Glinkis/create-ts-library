import React from "react";
import { NavItem } from "./nav/NavItem";
import * as API from "../../api.json";
import { NavGroup } from "./nav/NavGroup";

const navItems = (function() {
  return Object.keys(API).map((key, i) => getMembers(API[key], i));
})();

export const Nav = () => (
  <nav>
    <ul className="col-xs-4 nav">
      {navItems}
    </ul>
  </nav>
);

/**
 * @param {JSDocComment} member
 * @param {number} i
 */
function getMembers(member, i) {
  if (!member.name) {
    return null;
  }

  const hierarchy = member.path.map(path => path.name);
  const path = "/docs/" + hierarchy.reduce((acc, next) => acc + "/" + next);
  const members = getMemberGroup(member.members.static);

  return <NavItem key={i} path={path} name={member.name}>{members}</NavItem>;
}

/**
 * @param {Array<JSDocComment>} members
 */
function getMemberGroup(members) {
  if (members.length) {
    return <NavGroup>{members.map(getMembers)}</NavGroup>;
  }
  return null;
}
