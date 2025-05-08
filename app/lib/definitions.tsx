export interface WeatherResponse {
  coord: { lon: number; lat: number };
  weather: { id: number; main: string; description: string; icon: string }[];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level?: number;
    grnd_level?: number;
  };
  visibility: number;
  wind: { speed: number; deg: number; gust?: number };
  clouds: { all: number };
  dt: number;
  sys: { country: string; sunrise: number; sunset: number };
  timezone: number;
  id: number;
  name: string;
  cod: number;
  // rain?: { "1h"?: number; "3h"?: number };
  rain?: { "1h"?: number};
}


export interface SideContentProps {
  icon: string;
  main: string;
  description: string;
  temperature: number
  day: number;
  day_of_week: string;
  month: string;
  year: number;
  time: string;
  rain?: number;
  coord: {
    lon: number;
    lat: number;
  }
  country: string;
  city_name: string;
  timezone: string;
}


export interface WeatherData {
  title: string;
  type: "normal" | "temp"| "wind" | "sun";
  value: 
    | string 
    | number 
    | {
        temp_min: number;
        temp_max: number;
      }
    | {
        speed?: number;
        deg?: number;
        gust?: number;
      }
      | {
        sunrise: string;
        sunset: string;
      };
}
