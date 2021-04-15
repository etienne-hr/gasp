import React from "react";
import ReactDOM from "react-dom";
import { Gasp } from "./Gasp";

const App = () => {
  return (
    <div
      className="container"
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Gasp />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
