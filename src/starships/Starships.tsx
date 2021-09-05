import { Starship } from "./Starship";
import { useRecoilState } from "recoil";
import { favoritesState } from "./favorites/favoritesState";
import { ChangeEvent } from "react";

interface StarshipsProps {
  ships: Starship[]
  showNotes: boolean
}

export const Starships = ({ships, showNotes}: StarshipsProps) => {
  const [favorites, setFavorites] = useRecoilState(favoritesState)

  const updateFavorites = (ship: Starship, checked: boolean) => {
    setFavorites((oldFavorites) => {
        const filtered = oldFavorites.filter(s => s.url !== ship.url);
        return checked ? [...filtered, ship] : filtered
      }
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
        {
          showNotes &&
          <textarea
              value={ship.notes}
              onChange={(e) => updateFavorites({
                ...ship,
                notes: e.target.value
              }, true)}
          />
        }
      </div>
    )}
  </div>
}
