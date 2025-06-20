import { WeatherResponse, SideContentProps, WeatherData, 
  UnitsSystem, UnitSystemKey} from "./definitions";


export function weatherResponseParser(response: WeatherResponse, units:UnitSystemKey){
  /** Weather API response parser
  * 
  * Parse the response of the API to 
  * fit component requirements.
  */
  let icon = "/vercel.svg";
  if(response?.weather[0].icon){
    const baseIconURL = "http://openweathermap.org/img/wn/";
    const icon_size = "@2x.png";
    icon = `${baseIconURL}${response?.weather[0].icon}${icon_size}`;
  }
  
  const selectedUnitSystem = UnitsSystem[units];

  const sideContent: SideContentProps = {
    icon: icon,
    main: response?.weather[0].main,
    description: response?.weather[0].description,
    temperature: {value: response?.main.temp, unit: selectedUnitSystem.temperature}, 
    ...getDateFromTimestamp(response?.dt, response?.timezone),
    rain: {value: response?.rain?.["1h"] ?? 0, unit: selectedUnitSystem.rain} ,
    coord: response?.coord,
    country: response?.sys.country,
    city_name: response?.name
  }


  const weatherData: WeatherData[] = [
    {title: "Temperature", 
      type:"temp",
      unit: selectedUnitSystem.temperature,
      value: { 
      temp_min: response?.main.temp_min, 
      temp_max: response?.main.temp_max
    }
    },
    {title: "Feels Like", type:"normal", unit: selectedUnitSystem.temperature, value: response?.main.feels_like},
    {title: "Humidity", type:"normal", unit: selectedUnitSystem.humidity, value:response?.main.humidity},
    {title: "Atmospheric Pressure", type:"normal", unit: selectedUnitSystem.atmosphericPressure, value: response?.main.pressure},
    {title: "Sea Level", type:"normal", unit: selectedUnitSystem.seaLevel, value: response?.main.sea_level ?? 0},
    {title: "Ground Level",  type:"normal", unit: selectedUnitSystem.groundLevel, value: response?.main.grnd_level ?? 0},
    
    {title: "Visibility", type:"normal", unit: selectedUnitSystem.visibility, value: response?.visibility},
    {title: "Sun", type:"sun", 
      value: {
        sunrise: getDateFromTimestamp(response?.sys.sunrise, 0).time, 
        sunset: getDateFromTimestamp(response?.sys.sunset, 0).time 
      }
    },
    {title: "Wind", type:"wind", 
      value: { 
        speed: {value: response?.wind.speed, unit: selectedUnitSystem.wind.speed},
        deg: {value: response?.wind.deg, unit: selectedUnitSystem.wind.deg},
        gust: {value: response?.wind.gust ?? 0, unit: selectedUnitSystem.wind.gust} 
      }
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
