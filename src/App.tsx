import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import { GetStarships } from "./starships/GetStarships";
import { FavoriteStarships } from "./starships/favorites/FavoriteStarships";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Route exact path="/" component={GetStarships} />
        <Route exact path="/favorites" component={FavoriteStarships} />
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
