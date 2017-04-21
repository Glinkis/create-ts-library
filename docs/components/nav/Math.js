import React from 'react';
import { Link, Route } from 'react-router-dom';
import { NavGroup, NavItem } from '../Nav';

const MathSubmenu = () =>
  <NavGroup>
    <NavItem>
      <Link to="/math/clamp">clamp</Link>
    </NavItem>
    <NavItem>
      <Link to="/math/degreeToRadian">degreeToRadian</Link>
    </NavItem>
    <NavItem>
      <Link to="/math/mapToRange">mapToRange</Link>
    </NavItem>
  </NavGroup>;

export const Math = () =>
  <NavItem>
    <Link to="/math">math</Link>
    <Route path="/math" component={MathSubmenu}/>
  </NavItem>;
