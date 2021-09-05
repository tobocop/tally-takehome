import { Starship } from "./Starship";
import { useRecoilState } from "recoil";
import { favoritesState } from "./favorites/favoritesState";
import { ChangeEvent } from "react";

interface StarshipsProps {
  ships: Starship[]
}

export const Starships = ({ships}: StarshipsProps) => {
  const [favorites, setFavorites] = useRecoilState(favoritesState)

  const updateFavorites = (ship: Starship, checked: boolean) => {
    setFavorites((oldFavorites) =>
      checked ? [...oldFavorites, ship]
        : oldFavorites.filter(s => s !== ship)
    )
  }

  return <div>
    {ships.map(ship =>
      <div key={ship.url}>
        <input
          type="checkbox"
          checked={favorites.find(f => f.url === ship.url) !== undefined}
          onChange={(e: ChangeEvent<HTMLInputElement>) => updateFavorites(ship, e.target.checked)}
        />
        {ship.name} <br />
        {ship.manufacturer} <br />
        {ship.hyperdrive_rating} <br />
        {ship.passengers} <br />
      </div>
    )}
  </div>
}
