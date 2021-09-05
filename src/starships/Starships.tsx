import { useEffect, useState } from "react";

export interface Starship {
  url: string
  name: string
  manufacturer: string
  hyperdrive_rating: string
  passengers: string
}

export interface StarshipsResponse {
  next: string | null
  previous: string | null
  results: Starship[]
}

export const Starships = () => {
  const [starshipsResponse, setStarshipsResponse] = useState<StarshipsResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    setIsLoading(true)
    fetch("https://swapi.dev/api/starships", {
      method: "GET",
      headers: { 'Content-Type': 'application/json' }
    }).then(r => r.json())
      .then(body => setStarshipsResponse(body))
      .finally(() => setIsLoading(false))
  }, [])

  if(isLoading || starshipsResponse === null) {
    return <div>Loading...</div>
  }


  return <div>
    {starshipsResponse.results.map(starship =>
      <div key={starship.name}>
        {starship.name} <br />
        {starship.manufacturer} <br />
        {starship.hyperdrive_rating} <br />
        {starship.passengers} <br />
      </div>)}
  </div>
}
