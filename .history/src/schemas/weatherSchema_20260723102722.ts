import { z } from "zod";

const CurrentWeatherSchema = z.object({
  time: z.string(),
  interval: z.number().optional(),
  temperature_2m: z.number(),
  relative_humidity_2m: z.number(),
  apparent_temperature: z.number(),
  is_day: z.number(),
  precipitation: z.number(),
  weather_code: z.number(),
  cloud_cover: z.number(),
  pressure_msl: z.number(),
  wind_speed_10m: z.number(),
  wind_direction_10m: z.number(),
});

export const WeatherSchema = z.object({
  latitude: z.number(),
  longitude: z.number(),
  timezone: z.string(),
  current: CurrentWeatherSchema,
});

export type Weather = z.infer<typeof WeatherSchema>;