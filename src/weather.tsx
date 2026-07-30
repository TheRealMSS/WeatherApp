export function weatherEmoji(code: number, isDay: number) {
  const base = "https://cdn.jsdelivr.net/gh/basmilius/weather-icons/production/fill/all"

if (code === 0) return `${base}/${isDay ? "clear-day" : "clear-night"}.svg`
if (code <= 2) return `${base}/${isDay ? "partly-cloudy-day" : "partly-cloudy-night"}.svg`
if (code === 3) return `${base}/${isDay ? "overcast-day" : "overcast-night"}.svg`
if (code <= 48) return `${base}/fog.svg`
  if (code <= 55) return `${base}/drizzle.svg`
  if (code <= 67) return `${base}/rain.svg`
  if (code <= 77) return `${base}/snow.svg`
  if (code <= 82) return `${base}/rain.svg`
  return `${base}/thunderstorms.svg`
}

export function weatherDescription(code: number) {
  if (code === 0) return "Clear sky"
  if (code <= 2) return "Partly cloudy"
  if (code === 3) return "Overcast"
  if (code <= 48) return "Fog"
  if (code <= 55) return "Drizzle"
  if (code <= 65) return "Rain"
  if (code <= 67) return "Freezing rain"
  if (code <= 77) return "Snow"
  if (code <= 82) return "Rain showers"
  if (code <= 86) return "Snow showers"
  if (code <= 99) return "Thunderstorm"
  return "Unknown"
}

export function formatLocalTime(isoString: string) {
  const [, timePart] = isoString.split('T')       // "16:15"
  let [hour, minute] = timePart.split(':').map(Number)
  const suffix = hour >= 12 ? 'PM' : 'AM'
  hour = hour % 12 || 12
  return `${hour}:${minute.toString().padStart(2, '0')} ${suffix}`
}