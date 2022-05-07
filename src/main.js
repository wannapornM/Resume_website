import ReactDOM from "react-dom";
import React from "react";
//import { App } from "./App";

function Main() {
  return <div>Hello from Main component</div>;
}

const main = document.getElementById("main");
ReactDOM.render(<Main />, main);
