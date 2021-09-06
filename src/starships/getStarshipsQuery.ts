import { selectorFamily } from "recoil";
import { StarshipsResponse } from "./Starship";

export const getStarshipsQuery = selectorFamily<StarshipsResponse, string>({
  key: "Starships",
  get: (endpoint: string) => async () => {
    const ret = await fetch(endpoint, {
      method: "GET",
      headers: {'Content-Type': 'application/json'}
    })
    return await ret.json()
  }
})
