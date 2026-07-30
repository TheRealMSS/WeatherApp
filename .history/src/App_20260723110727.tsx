import { useQuery } from "@tanstack/react-query"
import { getWeather } from "./api"
import Card from "./components/cards/Card"

function App(){
 

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Error: {error.message}</p>

  return (
    <div className="flex flex-col gap-8">
      <Card title="Current Weather">{JSON.stringify(data.current).slice(0, 150)}</Card>
      <Card title="Hourly Forecast (48 Hours)">{JSON.stringify(data.hourly).slice(0, 150)}</Card>
    </div>)
}

export default App