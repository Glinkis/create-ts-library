import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Nav } from './components/Nav';
import { Content } from './components/Content';

const App = () =>
  <div className="container">
    <Nav />
    <Content/>
  </div>;

const Docs = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={App}/>
    </BrowserRouter>
  );
};

ReactDOM.render(<Docs/>, document.getElementById('root'));
