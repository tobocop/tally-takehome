import { Starship } from "../../starships/Starship";
import { UUID } from "../../UUID";

export const makeStarship = (overrides: Partial<Starship> = {}): Starship => ({
  url: UUID.randomUUID(),
  name: "",
  manufacturer: "",
  hyperdrive_rating: "0",
  passengers: "",
  notes: "",
  ...overrides
})
