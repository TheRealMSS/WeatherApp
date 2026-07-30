import { useQuery } from "@tanstack/react-query"
import { getWeather } from "./api"

function App(){

  const {data} = useQuery({
    queryKey: ['weather'],
    queryFn: () => getWeather({la})
  })
  return(
    <>

    </>
  )
}

export default App