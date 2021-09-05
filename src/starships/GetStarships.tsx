import { useEffect, useState } from "react";
import { PaginationButton } from "../pagination/PaginationButton";
import { StarshipsResponse } from "./Starship";
import { Starships } from "./Starships";
import {Link} from "react-router-dom"

export const GetStarships = () => {
  const [apiUrl, setApiUrl] = useState("https://swapi.dev/api/starships")
  const [starshipsResponse, setStarshipsResponse] = useState<StarshipsResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    fetch(apiUrl, {
      method: "GET",
      headers: {'Content-Type': 'application/json'}
    }).then(r => r.json())
      .then(body => setStarshipsResponse(body))
      .finally(() => setIsLoading(false))
  }, [apiUrl])

  if (isLoading || starshipsResponse === null) {
    return <div>Loading...</div>
  }

  return <div>
    <Link to="/favorites">Favorites</Link>
    <Starships ships={starshipsResponse.results} />
    <PaginationButton url={starshipsResponse.previous} onClick={setApiUrl} text="previous" />
    <PaginationButton url={starshipsResponse.next} onClick={setApiUrl} text="next" />
  </div>
}
