import { WeatherResponse, SideContentProps, WeatherData } from "./definitions";

export function weatherResponseParser(response: WeatherResponse){
   /** Weather API response parser
    * 
    * Parse the response of the API to 
    * fit component requirements.
    */

    const baseIconURL = "http://openweathermap.org/img/wn/";
    const icon_size = "@2x.png";
    const icon = `${baseIconURL}${response.weather[0].icon}${icon_size}`;

    const sideContent: SideContentProps = {
      icon: icon,
      main: response.weather[0].main,
      description: response.weather[0].description,
      temperature: response.main.temp,
      ...getDateFromTimestamp(response.dt, response.timezone),
      rain: response.rain?.["1h"] ?? 0,
      coord: response.coord,
      country: response.sys.country,
      city_name: response.name,
    }


    const weatherData: WeatherData[] = [
      {title: "Feels Like", type:"normal", value: response.main.feels_like},
      
      {title: "Sea Level", type:"normal", value: response.main.sea_level ?? 0},
      {title: "Ground Level",  type:"normal", value: response.main.grnd_level ?? 0},
      {title: "Humidity", type:"normal", value:response.main.humidity},
      {title: "Atmospheric Pressure", type:"normal", value: response.main.pressure},
      {title: "Visibility", type:"normal", value: response.visibility},
      {title: "Temperature", type:"temp", value:{ "temp_min": response.main.temp_min, "temp_max": response.main.temp_max }},
      {title: "Wind", type:"wind", value: { speed:response.wind.speed, deg:response.wind.deg, gust: response.wind.gust}},
      {title: "Sun", type:"wind", value: {
        sunrise: getDateFromTimestamp(response.sys.sunrise, 0).time, 
        sunset: getDateFromTimestamp(response.sys.sunset, 0).time }
      }
    ]

    return {sideData: sideContent, mainData: weatherData}
}



function getDateFromTimestamp(timestamp: number, timezoneOffset: number){
  const date = new Date((timestamp + timezoneOffset) * 1000);

  const day = date.getDate();
  const day_of_week = date.toLocaleString('en-US', { weekday: 'long' });
  const month = date.toLocaleString('en-US', { month: 'long' });
  const year = date.getFullYear();
  const time = date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  const timezone = `UTC${timezoneOffset >= 0 ? '+' : ''}${timezoneOffset / 3600}`;

  return { day, day_of_week, month, year, time, timezone };
}


// {
//     coord: { lon: 36.8167, lat: -1.2833 },
//     weather: [
//       {
//         id: 802,
//         main: 'Clouds',
//         description: 'scattered clouds',
//         icon: '03d'
//       }
//     ],
//     base: 'stations',
//     main: {
//       temp: 23.95,
//       feels_like: 23.71,
//       temp_min: 23.95,
//       temp_max: 23.95,
//       pressure: 1014,
//       humidity: 50,
//       sea_level: 1014,
//       grnd_level: 840
//     },
//     visibility: 10000,
//     wind: { speed: 2.46, deg: 107, gust: 2.33 },
//     clouds: { all: 48 },
//     dt: 1746258121,
//     sys: { country: 'KE', sunrise: 1746242852, sunset: 1746286293 },
//     timezone: 10800,
//     id: 184745,
//     name: 'Nairobi',
//     cod: 200
// }