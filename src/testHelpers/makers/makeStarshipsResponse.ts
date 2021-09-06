import { StarshipsResponse } from "../../starships/Starship";

export const makeStarshipsResponse = (overrides: Partial<StarshipsResponse> = {}): StarshipsResponse => ({
  next: null,
  previous: null,
  results: [],
  ...overrides
})
