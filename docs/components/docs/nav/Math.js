import React from 'react';
import { NavGroup } from './NavGroup';
import { NavItem } from './NavItem';

const MathSubmenu = () =>
  <NavGroup>
    <NavItem path="/docs/math/" name="clamp"/>
    <NavItem path="/docs/math/" name="degreeToRadian"/>
    <NavItem path="/docs/math/" name="mapToRange"/>
  </NavGroup>;

export const Math = () =>
  <NavItem path="/docs/" name="math" component={MathSubmenu}/>;
