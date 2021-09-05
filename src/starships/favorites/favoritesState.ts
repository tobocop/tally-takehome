import {atom} from 'recoil'
import { Starship } from "../Starship";

export const favoritesState = atom<Starship[]>({
  key: "favoritesState",
  default: [],
})
