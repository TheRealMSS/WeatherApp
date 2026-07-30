// src/components/Locations.tsx
export type Continent = "North America" | "South America" | "Europe" | "Africa" | "Asia" | "Oceania"

export const continents: Record<Continent, string[]> = {
  "North America": ["New York", "Los Angeles", "Chicago", "Toronto", "Mexico City", "Houston", "Miami", "Vancouver", "Chicago", "Montreal"],
  "South America": ["São Paulo", "Buenos Aires", "Rio de Janeiro", "Bogotá", "Lima", "Santiago", "Caracas", "Medellín", "Quito", "Montevideo"],
  "Europe": ["London", "Paris", "Berlin", "Madrid", "Rome", "Amsterdam", "Vienna", "Warsaw", "Lisbon", "Athens"],
  "Africa": ["Cairo", "Lagos", "Johannesburg", "Nairobi", "Casablanca", "Accra", "Addis Ababa", "Tunis", "Kampala", "Dakar"],
  "Asia": ["Tokyo", "Shanghai", "Mumbai", "Seoul", "Bangkok", "Singapore", "Dubai", "Jakarta", "Manila", "Hong Kong"],
  "Oceania": ["Sydney", "Melbourne", "Auckland", "Brisbane", "Perth", "Wellington", "Adelaide", "Fiji", "Suva", "Christchurch"],
}