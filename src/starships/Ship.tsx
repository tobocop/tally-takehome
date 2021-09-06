import { Stars } from "./Stars";
import { ChangeEvent } from "react";
import { Starship } from "./Starship";
import "./Ship.scss";

interface StarshipProps {
  ship: Starship
  favorite: boolean
  updateFavorites: (ship: Starship, checked: boolean) => void
  showNotes: boolean
}

export const Ship = ({ship, favorite, updateFavorites, showNotes}: StarshipProps) =>
  <div key={ship.url} className="Ship card">
    <div className="details">
      <div className="specs">
        <h2 className="name">{ship.name}</h2>
        <p className="manufacturer">{ship.manufacturer}</p>
        <div className="stars"><Stars count={ship.hyperdrive_rating} /></div>
        <p>Passengers: {ship.passengers}</p>
      </div>
      <div className="picture">
        <label className="customCheckbox">
          <input
            type="checkbox"
            checked={favorite}
            onChange={(e: ChangeEvent<HTMLInputElement>) => updateFavorites(ship, e.target.checked)}
          />
          <i className="heart" aria-hidden={true} />
        </label>
      </div>
    </div>
    {
      showNotes &&
      <textarea
          placeholder="Add text"
          className="notes"
          value={ship.notes}
          onChange={(e) => updateFavorites({
            ...ship,
            notes: e.target.value
          }, true)}
      />
    }
  </div>;
