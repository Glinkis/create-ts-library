import React from 'react';
import { Route } from 'react-router-dom';
import * as API from '../../api.json';
import { getPage } from './content/getPage';

const contentRoutes = (function () {
  return Object.keys(API).map((key, i) => getRoutes(API[key], i))
})();

export const Content = () => (
  <div className="col-xs-8">
    {contentRoutes}
  </div>
);

function getRoutes(member, i) {
  if (!member.name) return;

  const hierarchy = member.path.map(path => path.name);
  const path = "/docs/" + hierarchy.reduce((acc, next) => acc + "/" + next);
  const routes = member.members.static.map(getRoutes);

  const component = () => getPage(member);
  return [<Route exact key={i} path={path} component={component} />, routes];
}
