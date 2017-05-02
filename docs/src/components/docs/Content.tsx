import * as React from "react";
import { Route } from "react-router-dom";
import * as API from "../../api.json";
import { getPage } from "./content/getPage";

const contentRoutes = (function() {
  return Object.keys(API).map(key => getRoutes(API[key]));
})();

export const Content = () => (
  <div className="col-xs-9">
    {contentRoutes}
  </div>
);

function getRoutes(member: JSDocComment) {
  if (!member.name) return;

  const hierarchy = member.path.map(path => path.name);
  const path = "/docs/" + hierarchy.reduce((acc: string, next: string) => acc + "/" + next);

  const breadcrumb = () => getBreadcrumb(hierarchy);
  const page = () => getPage(member);

  return [
    <Route exact key={"breadcrumb"} path={path} component={breadcrumb} />,
    <Route exact key={"page"} path={path} component={page} />,
    member.members.static.map(getRoutes)
  ];
}

function getBreadcrumb(hierarchy: Array<string>) {
  const crumbs = hierarchy.map((crumb: string, i: number) => {
    const active = i === hierarchy.length - 1 ? " active" : "";
    return (
      <li key={i} href="#" className={"breadcrumb-item" + active}>
        {crumb}
      </li>
    );
  });
  return <ol className="breadcrumb">{crumbs}</ol>;
}
