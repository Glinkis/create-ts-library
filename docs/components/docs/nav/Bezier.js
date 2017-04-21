import React from 'react';
import { NavGroup } from './NavGroup';
import { NavItem } from './NavItem';

const BezierSubmenu = () =>
  <NavGroup>
    <NavItem path="/docs/bezier/" name="linear"/>
    <NavItem path="/docs/bezier/" name="cubic"/>
    <NavItem path="/docs/bezier/" name="quadratic"/>
  </NavGroup>;

export const Bezier = () =>
  <NavItem path="/docs/" name="bezier" component={BezierSubmenu}/>;
