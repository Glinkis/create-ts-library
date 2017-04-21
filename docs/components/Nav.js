import React from 'react';
import { Link, Route } from 'react-router-dom';
import { Bezier } from './nav/Bezier';
import { Dom } from './nav/Dom';
import { Math } from './nav/Math';

export const NavGroup = (props) =>
  <ul className="list-group">
    {props.children}
  </ul>;

export const NavItem = (props) => {
  const route = props.component ?
    <Route
      path={`${props.path}${props.name}`}
      component={props.component}
    /> : null;

  return (
    <li className="list-group-item">
      <Link to={`${props.path}${props.name}`}>
        {props.name}
      </Link>
      {route}
      {props.children}
    </li>
  );
};

export const Nav = () =>
  <div className="col-xs-4">
    <NavGroup>
      <Bezier/>
      <Dom/>
      <Math/>
    </NavGroup>
  </div>;
