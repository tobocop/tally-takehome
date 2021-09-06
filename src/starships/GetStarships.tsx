import { useState } from "react";
import { PaginationButton } from "../pagination/PaginationButton";
import { Starships } from "./Starships";
import { Link } from "react-router-dom"
import { Routes } from "../Routes";
import "./GetStarships.scss";
import { Header } from "../Header";
import { useRecoilValueLoadable } from "recoil";
import { getStarshipsQuery } from "./getStarshipsQuery";

export const GetStarships = () => {
  const [apiUrl, setApiUrl] = useState("https://swapi.dev/api/starships")
  const starshipsResponseLoadable = useRecoilValueLoadable(getStarshipsQuery(apiUrl))

  const renderShips = () => {
    const starshipsResponse = starshipsResponseLoadable.contents
    switch (starshipsResponseLoadable.state) {
      case "hasValue":
        return <>
          <Starships ships={starshipsResponse.results} showNotes={false} />
          <div className="pagination">
            <div className="previousPage">
              <PaginationButton url={starshipsResponse.previous} onClick={setApiUrl} text="Previous page" />
            </div>
            <div>
              <PaginationButton url={starshipsResponse.next} onClick={setApiUrl} text="Next page" />
            </div>
          </div>
        </>;
      case "loading":
        return <div>Loading...</div>
      case "hasError":
        return <div>Call to get starships has errored. Please try again later</div>
    }
  }

  return <div className="GetStarships">
    <Header>
      <Link to={Routes.Favorites}>View Favorites</Link>
    </Header>
    <h1 className="title">Starship List</h1>
    {renderShips()}
  </div>
}
