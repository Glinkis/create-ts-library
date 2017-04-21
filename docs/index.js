import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import { Nav } from './components/Nav';
import { Content } from './components/Content';

const App = () =>
  <div className="container">
    <Nav />
    <Content/>
  </div>;

const Docs = () => {
  return (
    <HashRouter>
      <Route path="/" component={App}/>
    </HashRouter>
  );
};

ReactDOM.render(<Docs/>, document.getElementById('root'));
