import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";

import "./index.scss";

import C360Home from "./C360Home";

const App = () => (
  <div>
  <Header></Header>
  <C360Home></C360Home>
  
</div>
);
ReactDOM.render(<App />, document.getElementById("app"));
