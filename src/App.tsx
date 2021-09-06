import React from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import { GetStarships } from "./starships/GetStarships";
import { FavoriteStarships } from "./starships/favorites/FavoriteStarships";
import { RecoilRoot } from "recoil";
import { Routes } from "./Routes";
import "./App.scss"

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <div className="App">
          <Route exact path={Routes.Starships} component={GetStarships} />
          <Route exact path={Routes.Favorites} component={FavoriteStarships} />
        </div>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
