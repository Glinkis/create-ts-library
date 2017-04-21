import React from 'react';
import { NavGroup, NavItem } from '../Nav';

const DomSubmenu = () =>
  <NavGroup>
    <NavItem path="/dom/" name="getElementAbsolutePosition"/>
  </NavGroup>;

export const Dom = () =>
  <NavItem path="/" name="dom" component={DomSubmenu}/>;
