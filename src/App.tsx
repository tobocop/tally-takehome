import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import { GetStarships } from "./starships/GetStarships";
import { FavoriteStarships } from "./starships/favorites/FavoriteStarships";
import { RecoilRoot } from "recoil";
import { Routes } from "./Routes";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Route exact path={Routes.Starships} component={GetStarships} />
        <Route exact path={Routes.Favorites} component={FavoriteStarships} />
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
