import { useRecoilValue } from "recoil";
import { favoritesState } from "./favoritesState";
import { Starships } from "../Starships";
import {Link} from "react-router-dom";
import { Routes } from "../../Routes";

export const FavoriteStarships = () => {
  const favorites = useRecoilValue(favoritesState)
  return <div>
    <Link to={Routes.Starships}>Starships</Link>
    <Starships ships={favorites} showNotes />
  </div>
}
