import React from 'react';
import { Route } from 'react-router-dom';
import { Bezier } from './pages/Bezier';
import { Dom } from './pages/Dom';
import { Math } from './pages/Math';

export const Content = () =>
  <div className="col-xs-8">
    <Route path='/docs/bezier' component={Bezier}/>
    <Route path='/docs/dom' component={Dom}/>
    <Route path='/docs/math' component={Math}/>
  </div>;
