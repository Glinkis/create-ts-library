import * as React from "react";
import { Route } from "react-router-dom";
import * as API from "../api.json";
import { getPage } from "./content/getPage";
import { getPath } from "../misc/getPath";
import { getBreadcrumbs } from "./content/getBreadcrumbs";

const contentRoutes = (function () {
  return Object.keys(API).map(key => getRoutes(API[key]));
})();

export function Content() {
  return (
    <div className="col-xs-9">
      <Route exact path="/" component={Intro} />
      {contentRoutes}
    </div>
  );
}

function Intro() {
  return (
    <div className="jumbotron">
      <h1>jslib</h1>
      <h2>A modular javascript library.</h2>
    </div>
  );
}

function getRoutes(member: JSDocComment) {
  if (!member.name) return;

  const hierarchy = member.path.map(path => path.name);
  const path = getPath("/", hierarchy);

  const breadcrumb = () => getBreadcrumbs(hierarchy);
  const page = () => getPage(member);

  return [
    <Route exact path={path} key={"b"} component={breadcrumb} />,
    <Route exact path={path} key={"p"} component={page} />,
    member.members.static.map(getRoutes)
  ];
}