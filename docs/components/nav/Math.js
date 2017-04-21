import React from 'react';
import { NavGroup } from './NavGroup';
import { NavItem } from './NavItem';

const MathSubmenu = () =>
  <NavGroup>
    <NavItem path="/math/" name="clamp"/>
    <NavItem path="/math/" name="degreeToRadian"/>
    <NavItem path="/math/" name="mapToRange"/>
  </NavGroup>;

export const Math = () =>
  <NavItem path="/" name="math" component={MathSubmenu}/>;
