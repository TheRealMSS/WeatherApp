import { z } from "zod";

const WeatherConditionSchema = z.object({
  id: z.number(),
  main: z.string(),
  description: z.string(),
  icon: z.string(),
});

const CurrentWeatherDataSchema = z.object({
  dt: z.number(),
  sunrise: z.number().optional(),
  sunset: z.number().optional(),
  temp: z.number(),
  feels_like: z.number(),
  pressure: z.number(),
  humidity: z.number(),
  dew_point: z.number(),
  uvi: z.number(),
  clouds: z.number(),
  visibility: z.number().optional(),
  wind_speed: z.number(),
  wind_gust: z.number().optional(),
  wind_deg: z.number(),
  rain: z.object({ "1h": z.number() }).optional(),
  snow: z.object({ "1h": z.number() }).optional(),
  weather: z.array(WeatherConditionSchema),
  alerts: z.array(z.string()).optional(),
});

export const WeatherSchema = z.object({
  lat: z.number(),
  lon: z.number(),
  timezone: z.string(),
  timezone_offset: z.number(),
  data: z.array(CurrentWeatherDataSchema),
});

export type Weather = z.infer<typeof WeatherSchema>;