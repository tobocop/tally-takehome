import { Starship } from "./Starship";

interface StarshipsProps {
  ships: Starship[]
}

export const Starships = ({ships}: StarshipsProps) => {
  return <div>
    {ships.map(ship =>
      <div key={ship.name}>
        {ship.name} <br />
        {ship.manufacturer} <br />
        {ship.hyperdrive_rating} <br />
        {ship.passengers} <br />
      </div>
    )}
  </div>
}