import { Starship } from "./Starship";
import { useRecoilState } from "recoil";
import { favoritesState } from "./favorites/favoritesState";
import { ChangeEvent } from "react";
import "./Starships.scss";
import { Stars } from "./Stars";

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

  return <div className="Starships">
    {ships.map(ship =>
      <div key={ship.url} className="card">
        <div className="details">
          <div className="specs">
            <h2 className="name">{ship.name}</h2>
            <p className="manufacturer">{ship.manufacturer}</p>
            <div className="stars"><Stars count={ship.hyperdrive_rating} /></div>
            <p>Passengers: {ship.passengers}</p>
          </div>
          <div className="picture">
            <input
              type="checkbox"
              checked={favorites.find(f => f.url === ship.url) !== undefined}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updateFavorites(ship, e.target.checked)}
            />
          </div>
        </div>
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
