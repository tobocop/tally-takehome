import { useRecoilValue } from "recoil";
import { favoritesState } from "./favoritesState";
import { Starships } from "../Starships";
import {Link} from "react-router-dom";

export const FavoriteStarships = () => {
  const favorites = useRecoilValue(favoritesState)
  return <div>
    <Link to="/">Starships</Link>
    <Starships ships={favorites} />
  </div>
}
