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
  return (
    <nav>
      <ul className="col-xs-3 nav">{navItems}</ul>
    </nav>
  );
}

function getNavItem(comment: JSDocComment, i: number): JSX.Element | null {
  if (!comment.name) return null;

  const hierarchy = getHierarchy(comment);
  const path = getPath("/", hierarchy);
  const members = getNavGroup(comment.members.static);

  return (
    <NavItem key={i} path={path} name={comment.name}>
      {members}
    </NavItem>
  );
}

function getNavGroup(comments: Array<JSDocComment>) {
  if (!comments.length) return null;
  return <NavGroup>{comments.map(getNavItem)}</NavGroup>;
}
