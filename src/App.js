import { render } from "react-dom";
import Pet from "./Pet";
import SearchParams from "./SearchParams";

const pets = [
  {
    name: "Luna",
    animal: "dog",
    breed: "Stafford",
  },
  {
    name: "Chuck",
    animal: "Dog",
    breed: "Stafford",
  },
  {
    name: "Cluck",
    animal: "Dog",
    breed: "Stafford",
  },
];

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  );
};

render(<App />, document.querySelector("#root"));
