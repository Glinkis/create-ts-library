import React from 'react';
import { Route } from 'react-router-dom';
import * as API from '../../api.json';
import { Page } from './Page';

const contentRoutes = (function () {
  return Object.keys(API).map((key, i) => {
    if (!API[key].name) return;
    const path = "/docs/" + API[key].name;
    const component = () => <Page>{path}</Page>;
    return <Route key={i} path={path} component={component}/>;
  });
}());

export const Content = () =>
  <div className="col-xs-8">
    {contentRoutes}
  </div>;
