import React from 'react';
import { Link, Route } from 'react-router-dom';
import { NavGroup, NavItem } from '../Nav';

const BezierSubmenu = () =>
  <NavGroup>
    <NavItem>
      <Link to="/bezier/linear">linear</Link>
    </NavItem>
    <NavItem>
      <Link to="/bezier/cubic">cubic</Link>
    </NavItem>
    <NavItem>
      <Link to="/bezier/quadratic">quadratic</Link>
    </NavItem>
  </NavGroup>;

export const Bezier = () =>
  <NavItem>
    <Link to="/bezier">bezier</Link>
    <Route path="/bezier" component={BezierSubmenu}/>
  </NavItem>;
