import { useQuery } from "@tanstack/react-query"
import { getWeather } from "./api"
import Card from "./components/cards/Card"

function App(){
  const {data, error, isError, isLoading} = useQuery({
    queryKey: ['weather'],
    queryFn: () => getWeather({lat: 51.5074, lon: -0.1278})
  })

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Error: {error.message}</p>

  return (
    <>
      <Card>{JSON.stringify(data.current)}</Card>
      <Card>{JSON.stringify(data.hourly)}</Card>
      <Card>{JSON.stringify(data.daily)}</Card>
    </>)}
    
    export default App