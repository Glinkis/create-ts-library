import React from "react";
import { Route } from "react-router-dom";
import { getPage } from "./content/getPage";
import * as API from "../../api.json";

const contentRoutes = (function() {
  return Object.keys(API).map(key => getRoutes(API[key]));
})();

export const Content = () => (
  <div className="col-xs-8">
    {contentRoutes}
  </div>
);

/**
 * @param {JSDocComment} member
 */
function getRoutes(member) {
  if (!member.name) return;

  const hierarchy = member.path.map(path => path.name);
  const path = "/docs/" + hierarchy.reduce((acc, next) => acc + "/" + next);
  const routes = member.members.static.map(getRoutes);

  const breadcrumb = () => getBreadcrumb(hierarchy);
  const page = () => getPage(member);

  return [
    <Route exact key={"breadcrumb"} path={path} component={breadcrumb} />,
    <Route exact key={"page"} path={path} component={page} />,
    routes
  ];
}

/**
 * @param {Array<string>} hierarchy
 */
function getBreadcrumb(hierarchy) {
  const crumbs = hierarchy.map((crumb, i) => (
    <li
      key={i}
      href="#"
      className={
        "breadcrumb-item" + (i === hierarchy.length - 1 ? " active" : "")
      }
    >
      {crumb}
    </li>
  ));
  return <div><ol className="breadcrumb">{crumbs}</ol><hr /></div>;
}
