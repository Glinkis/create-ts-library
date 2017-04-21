import React from 'react';
import { Route } from 'react-router-dom';
import { Bezier } from './pages/Bezier';
import { Dom } from './pages/Dom';
import { Math } from './pages/Math';

export const Content = () =>
  <div className="col-xs-8">
    <Route path='/bezier' component={Bezier}/>
    <Route path='/dom' component={Dom}/>
    <Route path='/math' component={Math}/>
  </div>;
