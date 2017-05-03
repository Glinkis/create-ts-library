import * as React from "react";
import * as API from "../api.json";
import { NavGroup } from "./nav/NavGroup";
import { NavItem } from "./nav/NavItem";
import { getPath } from "../misc/getPath";
import { getHierarchy } from "../misc/getHierarchy";

const navItems = Object.keys(API)
  .map(key => (API as any)[key])
  .map(getNavItem);

export function Nav() {
  return <nav><ul className="col-xs-3 nav">{navItems}</ul></nav>;
}

function getNavItem(member: JSDocComment, i: number): JSX.Element | null {
  if (!member.name) return null;

  const hierarchy = getHierarchy(member);
  const path = getPath("/", hierarchy);
  const members = getNavGroup(member.members.static);

  return <NavItem key={i} path={path} name={member.name}>{members}</NavItem>;
}

function getNavGroup(members: Array<JSDocComment>) {
  if (!members.length) return null;
  return <NavGroup>{members.map(getNavItem)}</NavGroup>;
}
