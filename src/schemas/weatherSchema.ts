import { z } from "zod";

const CurrentWeatherSchema = z.object({
  time: z.string(),
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

const HourlySchema = z.object({
  time: z.array(z.string()),
  temperature_2m: z.array(z.number()),
  precipitation_probability: z.array(z.number()),
  weather_code: z.array(z.number()),
  is_day: z.array(z.number()),
});

const DailySchema = z.object({
  time: z.array(z.string()),
  temperature_2m_max: z.array(z.number()),
  temperature_2m_min: z.array(z.number()),
  apparent_temperature_max: z.array(z.number()),
  apparent_temperature_min: z.array(z.number()),
  precipitation_sum: z.array(z.number()),
  weather_code: z.array(z.number()),
  sunrise: z.array(z.string()),
  sunset: z.array(z.string()),
});

export const WeatherSchema = z.object({
  latitude: z.number(),
  longitude: z.number(),
  timezone: z.string(),
  current: CurrentWeatherSchema,
  hourly: HourlySchema,
  daily: DailySchema,
});

export type Weather = z.infer<typeof WeatherSchema>;