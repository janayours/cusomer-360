import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";

import C360Home from "./C360Home";

const App = () => (
  <div>
  <header className="bg-green-600 text-white p-3 font-mono text-3xl">
    Customer 360
  </header>
  <C360Home></C360Home>
  <footer className="bg-green-600 text-white p-2 font-mono ">
    Copyrights @ HGS Digital
  </footer>
</div>
);
ReactDOM.render(<App />, document.getElementById("app"));
