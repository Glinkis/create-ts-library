import React from 'react';
import { Route } from 'react-router-dom';

const Bezier = () =>
  <div><h3>Bezier</h3></div>;

const Dom = () =>
  <div><h3>Dom</h3></div>;

const Math = () =>
  <div><h3>Math</h3></div>;

export const Content = () =>
  <div className="col-xs-8">
    <Route path='/bezier' component={Bezier}/>
    <Route path='/dom' component={Dom}/>
    <Route path='/math' component={Math}/>
  </div>;
