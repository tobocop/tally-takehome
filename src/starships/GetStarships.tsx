import { useEffect, useState } from "react";
import { PaginationButton } from "../pagination/PaginationButton";
import { StarshipsResponse } from "./Starship";
import { Starships } from "./Starships";
import { Link } from "react-router-dom"
import { Routes } from "../Routes";
import "./GetStarships.scss";
import { Header } from "../Header";

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

  return <div className="GetStarships">
    <Header>
      <Link to={Routes.Favorites}>View Favorites</Link>
    </Header>
    <h1 className="title">Starship List</h1>
    <Starships ships={starshipsResponse.results} showNotes={false} />
    <div className="pagination">
      <div className="previousPage">
        <PaginationButton url={starshipsResponse.previous} onClick={setApiUrl} text="Previous page" />
      </div>
      <div>
        <PaginationButton url={starshipsResponse.next} onClick={setApiUrl} text="Next page" />
      </div>
    </div>
  </div>
}
