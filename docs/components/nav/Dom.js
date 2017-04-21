import React from 'react';
import { Link, Route } from 'react-router-dom';
import { NavGroup, NavItem } from '../Nav';

const DomSubmenu = () =>
  <NavGroup>
    <NavItem>
      <Link to="/dom/getElementAbsolutePosition">getElementAbsolutePosition</Link>
    </NavItem>
  </NavGroup>;

export const Dom = () =>
  <NavItem>
    <Link to="/dom">dom</Link>
    <Route path="/dom" component={DomSubmenu}/>
  </NavItem>;
