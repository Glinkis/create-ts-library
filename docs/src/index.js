import * as React from "react";
import * as ReactDOM from "react-dom";
import { HashRouter, Route } from "react-router-dom";
import { Navbar } from "./components/docs/Navbar";
import { Docs } from "./components/docs";

const Intro = () => (
  <div className="jumbotron">
    <h1>jslib</h1>
    <h2>A modular javascript library.</h2>
  </div>
);

const App = () => (
  <div>
    <Navbar />
    <div className="container">
      <Route exact path="/" component={Intro} />
      <Route path="/docs" component={Docs} />
    </div>
  </div>
);

const Main = () => {
  return (
    <HashRouter>
      <Route path="/" component={App} />
    </HashRouter>
  );
};

ReactDOM.render(<Main />, document.getElementById("root"));
