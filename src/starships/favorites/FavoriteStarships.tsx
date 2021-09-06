import { useRecoilValue } from "recoil";
import { favoritesState } from "./favoritesState";
import { Starships } from "../Starships";
import { Link } from "react-router-dom";
import { Routes } from "../../Routes";
import { Header } from "../../Header";
import "./FavoriteStarships.scss"

export const FavoriteStarships = () => {
  const favorites = useRecoilValue(favoritesState)
  return <div className="FavoriteStarships">
    <Header>
      <Link to={Routes.Starships}>Starships</Link>
    </Header>
    <h1 className="title">Favorites</h1>
    {
      favorites.length > 0
        ? <Starships ships={favorites} showNotes />
        : <div>View the starships list to select favorites.</div>
    }
  </div>
}
