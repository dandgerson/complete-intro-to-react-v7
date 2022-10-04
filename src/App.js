import { StrictMode, useState } from "react";
import { render } from "react-dom";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Details from "./Details";
import SearchParams from "./SearchParams";
import ThemeContext from "./ThemeContext";

const App = () => {
  const themeState = useState("darkblue");

  return (
    <StrictMode>
      <ThemeContext.Provider value={themeState}>
        <BrowserRouter>
          <header>
            <Link to={"/"}>Adopt Me!</Link>
          </header>
          <Routes>
            <Route path="/details/:id" element={<Details />} />
            <Route path="/" element={<SearchParams />} />
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    </StrictMode>
  );
};

render(<App />, document.querySelector("#root"));
