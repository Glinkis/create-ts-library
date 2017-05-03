import * as React from 'react';

export function getBreadcrumbs(hierarchy: Array<string>) {
  const crumbs = hierarchy.map(getBreadcrumb);
  return <ol className="breadcrumb">{crumbs}</ol>;
}

function getBreadcrumb(crumb: string, i: number, hierarchy: Array<string>) {
  const active = i === hierarchy.length - 1 ? " active" : "";
  return <li key={i} className={"breadcrumb-item" + active}>{crumb}</li>;
}