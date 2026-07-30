import { Suspense, useState } from "react";
import DailyForecast from "./components/cards/DailyForecast";
import HourlyForecast from "./components/cards/HourlyForecast";
import CurrentWeather from "./components/cards/CurrentWeather";
import AdditionalInfo from "./components/cards/AdditionalInfo";
import Map from "./components/Map";
import type { Coords } from "./types";
import LocationDropdown from "./components/dropdowns/LocationDropdown";

function App() {
  const [coords, setCoords] = useState<Coords>({
    lat: 51.5074,
    lon: -0.1278,
  });

  const onMapClick = (lat: number, lon: number) => {
    setCoords({ lat, lon });
  };

  return (
    <div className="flex flex-col gap-6 sm:gap-8 max-w-5xl mx-auto w-full px-3 sm:px-6 py-4 sm:py-6">
      {/* Map + floating dropdown */}
      <div className="relative">
        <Map coords={coords} onMapClick={onMapClick} />

        <div className="absolute top-2 left-2 right-2 sm:top-4 sm:left-auto sm:right-4 z-[1001] flex justify-end">
          <LocationDropdown onCitySelect={onMapClick} />
        </div>
      </div>

      <Suspense
        fallback={
          <p className="text-2xl flex justify-center items-center">
            Loading...
          </p>
        }
      >
        <CurrentWeather coords={coords} />
        <HourlyForecast coords={coords} />
        <DailyForecast coords={coords} />
        <AdditionalInfo coords={coords} />
      </Suspense>
    </div>
  );
}

export default App;