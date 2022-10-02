import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Stafford",
    }),
    React.createElement(Pet, {
      name: "Chuck",
      animal: "Dog",
      breed: "Stafford",
    }),
    React.createElement(Pet, {
      name: "Cluck",
      animal: "Dog",
      breed: "Stafford",
    }),
  ]);
};

render(React.createElement(App), document.querySelector("#root"));
