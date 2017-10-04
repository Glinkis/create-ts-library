import * as React from "react";
import * as ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import { Content } from "./components/Content";
import { Nav } from "./components/Nav";
import { Navbar } from "./components/Navbar";

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
