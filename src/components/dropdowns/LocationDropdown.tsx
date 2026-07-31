// src/components/dropdowns/LocationDropdown.tsx
import { useState, type FormEvent } from "react"
import { continents, type Continent } from "../Locations"
import { getCoordinates } from "../../api"
import { ChevronDown, ChevronUp, Search } from "lucide-react"
import {
  Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select"

type Props = {
  onCitySelect: (lat: number, lon: number) => void
}

export default function LocationDropdown({ onCitySelect }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedContinent, setSelectedContinent] = useState<Continent | null>(null)
  const [query, setQuery] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function resolveAndSelect(cityName: string) {
    setLoading(true)
    setError(null)
    try {
      const { lat, lon } = await getCoordinates(cityName)
      onCitySelect(lat, lon)
    } catch (err) {
      setError(err instanceof Error ? err.message : "City not found")
    } finally {
      setLoading(false)
    }
  }

  function handleSearchSubmit(e: FormEvent) {
    e.preventDefault()
    if (query.trim()) resolveAndSelect(query.trim())
  }

  return (
    <div className="bg-zinc-900 rounded-lg shadow-md p-2 w-full sm:w-auto">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full gap-2 px-3 py-1 font-medium text-sm sm:text-base"
      >
        Browse locations
        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>

      {isOpen && (
        <div className="flex flex-col gap-2 mt-2">
          <Select onValueChange={(value: string | null) => {if (value) setSelectedContinent(value as Continent)}}>
            <SelectTrigger className="w-full sm:max-w-64">
              <SelectValue placeholder="Select a continent" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                {Object.keys(continents).map((c) => (
                  <SelectItem key={c} value={c}>{c}</SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>

          {selectedContinent && (
  <Select onValueChange={(value: string | null) => {if (value) resolveAndSelect(value)}}>
    <SelectTrigger className="w-full sm:max-w-64">
      <SelectValue placeholder={loading ? "Loading..." : "Select a city"} />
    </SelectTrigger>
    <SelectContent>
      {continents[selectedContinent].map((city: string) => (
        <SelectItem key={city} value={city}>{city}</SelectItem>
      ))}
    </SelectContent>
  </Select>
)}

          <form onSubmit={handleSearchSubmit} className="flex items-center gap-1 mt-1">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search any city..."
              className="w-full sm:max-w-64 min-w-0 rounded-3xl bg-input/50 px-3 py-2 text-sm outline-none focus-visible:ring-3 focus-visible:ring-ring/30"
            />
            <button
              type="submit"
              disabled={loading || !query.trim()}
              className="p-2 rounded-full bg-input/50 disabled:opacity-50"
            >
              <Search size={16} />
            </button>
          </form>

          {error && <p className="text-xs text-red-400">{error}</p>}
        </div>
      )}
    </div>
  )
}