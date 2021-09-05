import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import { GetStarships } from "./starships/GetStarships";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={GetStarships} />
    </BrowserRouter>
  );
}

export default App;
