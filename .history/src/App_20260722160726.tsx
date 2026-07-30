import { useQuery } from "@tanstack/react-query"
import { getWeather } from "./api"

function App(){

  const {data} = useQuery({
    queryKey: ['weather'],
    queryFn: () => getWeather({lat: 51.5074, lon:-0.1278})
  })
  return(
    <>
    {JSON.stringify(data)}
    </>
  )
}

export default App