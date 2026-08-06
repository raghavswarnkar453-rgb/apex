export interface WeatherData {
  temperature: string;
  wind: string;
  humidity: string;
  condition: string;
}

const WEATHER_CODES: Record<number, string> = {
  0: "Clear",
  1: "Mainly Clear",
  2: "Partly Cloudy",
  3: "Overcast",
  45: "Fog",
  48: "Fog",
  51: "Light Drizzle",
  53: "Drizzle",
  55: "Heavy Drizzle",
  61: "Rain",
  63: "Rain",
  65: "Heavy Rain",
  71: "Snow",
  73: "Snow",
  75: "Heavy Snow",
  80: "Rain Showers",
  81: "Rain Showers",
  82: "Heavy Showers",
  95: "Thunderstorm",
};

export async function getWeather(
  latitude: number,
  longitude: number
): Promise<WeatherData> {
  try {
    const res = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m,weather_code`,
      {
        next: {
          revalidate: 900,
        },
      }
    );

    if (!res.ok) {
      throw new Error("Weather request failed");
    }

    const data = await res.json();

    return {
      temperature: `${Math.round(
        data.current.temperature_2m
      )}°C`,

      wind: `${Math.round(
        data.current.wind_speed_10m
      )} km/h`,

      humidity: `${data.current.relative_humidity_2m}%`,

      condition:
        WEATHER_CODES[
          data.current.weather_code
        ] ?? "Unknown",
    };
  } catch {
    return {
      temperature: "--",
      wind: "--",
      humidity: "--",
      condition: "Unavailable",
    };
  }
}