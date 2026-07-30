export async function getWeather(){
    const res = await fetch(``)
    const data = res.json()
    return data
}