import React from 'react';
import { NavGroup } from './NavGroup';
import { NavItem } from './NavItem';

const DomSubmenu = () =>
  <NavGroup>
    <NavItem path="/dom/" name="getElementAbsolutePosition"/>
  </NavGroup>;

export const Dom = () =>
  <NavItem path="/" name="dom" component={DomSubmenu}/>;
