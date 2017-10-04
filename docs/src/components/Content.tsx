import * as React from "react";
import { Route } from "react-router-dom";
import * as API from "../api.json";
import { getHierarchy } from "../misc/getHierarchy";
import { getPath } from "../misc/getPath";
import { getBreadcrumbs } from "./content/getBreadcrumbs";
import { getPage } from "./content/getPage";
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

function getRoutes(comment: IJsDocComment): any[] | null {
  if (!comment.name) {
    return null;
  }

  const hierarchy = getHierarchy(comment);
  const path = getPath("/", hierarchy);

  const breadcrumb = () => getBreadcrumbs(hierarchy);
  const page = () => getPage(comment);

  return [
    <Route exact path={path} key={"b"} component={breadcrumb} />,
    <Route exact path={path} key={"p"} component={page} />,
    comment.members.static.map(getRoutes)
  ];
}
