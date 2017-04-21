import React from 'react';
import { Bezier } from './nav/Bezier';
import { Dom } from './nav/Dom';
import { Math } from './nav/Math';

export const Nav = () =>
  <nav>
    <ul className="col-xs-4">
      <Bezier/>
      <Dom/>
      <Math/>
    </ul>
  </nav>;
