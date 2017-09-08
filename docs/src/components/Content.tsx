import * as React from "react";
import { Route } from "react-router-dom";
import * as API from "../api.json";
import { getPage } from "./content/getPage";
import { getPath } from "../misc/getPath";
import { getBreadcrumbs } from "./content/getBreadcrumbs";
import { getHierarchy } from "../misc/getHierarchy";
import { Introduction } from "./Introduction";

const contentRoutes = Object.keys(API)
  .map(key => (API as any)[key])
  .map(getRoutes);

export function Content() {
  return (
    <div className="col-xs-9">
      <Route exact path="/" component={Introduction} />
      {contentRoutes}
    </div>
  );
}

function getRoutes(member: JSDocComment): Array<any> | null {
  if (!member.name) return null;

  const hierarchy = getHierarchy(member);
  const path = getPath("/", hierarchy);

  const breadcrumb = () => getBreadcrumbs(hierarchy);
  const page = () => getPage(member);

  return [
    <Route exact path={path} key={"b"} component={breadcrumb} />,
    <Route exact path={path} key={"p"} component={page} />,
    member.members.static.map(getRoutes)
  ];
}
