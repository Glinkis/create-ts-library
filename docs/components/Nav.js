import React from 'react';
import { Bezier } from './nav/Bezier';
import { Dom } from './nav/Dom';
import { Math } from './nav/Math';

export const NavGroup = (props) =>
  <ul className="list-group">
    {props.children}
  </ul>;

export const NavItem = (props) =>
  <li className="list-group-item">
    {props.children}
  </li>;

export const Nav = () =>
  <div className="col-xs-4">
    <NavGroup>
      <Bezier/>
      <Dom/>
      <Math/>
    </NavGroup>
  </div>;
