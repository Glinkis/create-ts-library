import React from 'react';
import { Link, Route } from 'react-router-dom';

const BezierSubNav = () =>
  <ul>
    <li><Link to="/bezier/linear">linear</Link></li>
    <li><Link to="/bezier/cubic">cubic</Link></li>
    <li><Link to="/bezier/quadratic">quadratic</Link></li>
  </ul>;

const BezierNav = () =>
  <li>
    <Link to="/bezier">bezier</Link>
    <Route path="/bezier" component={BezierSubNav}/>
  </li>;

const DomNav = () =>
  <li>
    <Link to="/dom">dom</Link>
  </li>;

const MathNav = () =>
  <li>
    <Link to="/math">math</Link>
  </li>;

export const Nav = () =>
  <div className="col-xs-4">
    <ul>
      <BezierNav/>
      <DomNav/>
      <MathNav/>
    </ul>
  </div>;
