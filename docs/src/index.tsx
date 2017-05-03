import * as React from "react";
import * as ReactDOM from "react-dom";
import { HashRouter, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Content } from "./components/Content";
import { Nav } from "./components/Nav";

function App() {
  return (
    <HashRouter>
      <div>
        <Navbar />
        <div className="container">
          <Nav />
          <Content />
        </div>
      </div>
    </HashRouter>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
