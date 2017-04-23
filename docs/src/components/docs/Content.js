import React from "react";
import { Route } from "react-router-dom";
import * as API from "../../api.json";
import { getPage } from "./content/getPage";

const contentRoutes = (function() {
  return Object.keys(API).map((key, i) => {
    const obj = API[key];
    if (!obj.name) return;
    const component = () => getPage(obj);
    return <Route key={i} path={"/docs/" + obj.name} component={component} />;
  });
})();

export const Content = () => (
  <div className="col-xs-8">
    {contentRoutes}
  </div>
);
