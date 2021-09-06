import { Starship } from "./Starship";
import { useRecoilState } from "recoil";
import { favoritesState } from "./favorites/favoritesState";
import "./Starships.scss";
import { chunk } from "../chunk";
import { Ship } from "./Ship";

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
    {chunk(ships, 2).map((rowShips: Starship[], i) =>
      <div key={i} className="starshipRow">
        {rowShips.map((ship) =>
          <Ship
            ship={ship}
            favorite={favorites.find(f => f.url === ship.url) !== undefined}
            updateFavorites={updateFavorites}
            showNotes={showNotes}
          />
        )}
      </div>
    )}
  </div>
}
