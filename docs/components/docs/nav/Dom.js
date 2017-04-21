import React from 'react';
import { NavGroup } from './NavGroup';
import { NavItem } from './NavItem';

const DomSubmenu = () =>
  <NavGroup>
    <NavItem path="/docs/dom/" name="getElementAbsolutePosition"/>
  </NavGroup>;

export const Dom = () =>
  <NavItem path="/docs/" name="dom" component={DomSubmenu}/>;
