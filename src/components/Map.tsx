// src/components/Map.tsx
import { MapContainer, Marker, TileLayer, useMap, useMapEvents } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import { useEffect } from "react"
import type { Coords } from "../types"

type Props = {
  coords: Coords
  onMapClick: (lat: number, lon: number) => void
}

export default function Map({ coords, onMapClick }: Props) {
  const { lat, lon } = coords
  return (
    <MapContainer center={[lat, lon]} zoom={5} style={{ width: "100%", height: "500px" }}>
      <MapClick onMapClick={onMapClick} />
      <RecenterMap lat={lat} lon={lon} />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, lon]} />
    </MapContainer>
  )
}

function MapClick({ onMapClick }: { onMapClick: (lat: number, lon: number) => void }) {
  useMapEvents({
    click(e) {
      const { lat, lng } = e.latlng
      e.target.panTo([lat, lng])
      onMapClick(lat, lng)
    },
  })
  return null
}

function RecenterMap({ lat, lon }: { lat: number; lon: number }) {
  const map = useMap()
  useEffect(() => {
    map.setView([lat, lon], map.getZoom())
  }, [lat, lon, map])
  return null
}