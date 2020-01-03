import React from "react";
//import logo from "./logo.svg";
import "./App.css";
//import "./public";
import { render } from "@testing-library/react";
import Pics from "./components/Pics";

function App() {
  render();
  return (
    <>
      <div className="container">
        <Pics />
      </div>
    </>
  );
}

export default App;
