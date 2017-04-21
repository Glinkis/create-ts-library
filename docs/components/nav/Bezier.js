import React from 'react';
import { NavGroup } from './NavGroup';
import { NavItem } from './NavItem';

const BezierSubmenu = () =>
  <NavGroup>
    <NavItem path="/bezier/" name="linear"/>
    <NavItem path="/bezier/" name="cubic"/>
    <NavItem path="/bezier/" name="quadratic"/>
  </NavGroup>;

export const Bezier = () =>
  <NavItem path="/" name="bezier" component={BezierSubmenu}/>;
