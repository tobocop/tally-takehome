import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import { Starships } from "./starships/Starships";

function App() {
  return (
    <BrowserRouter>
      <Route path="/" component={Starships} />
    </BrowserRouter>
  );
}

export default App;
