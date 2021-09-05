export interface Starship {
  url: string
  name: string
  manufacturer: string
  hyperdrive_rating: string
  passengers: string
  notes: string
}

export interface StarshipsResponse {
  next: string | null
  previous: string | null
  results: Starship[]
}
