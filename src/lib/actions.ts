import { weatherResponsePlaceholder } from "./placeholder";
import { APP_ENVIRONMENT, API_ID, DEFAULT_UNITS } from "./config";
import { type UnitSystemKey } from "./definitions";



export async function getCityWeather(cityName: string){
  /** Get City Weather */

  if(APP_ENVIRONMENT !== "PROD"){
    return {"message": "Success (dev)", data: weatherResponsePlaceholder, "units": DEFAULT_UNITS as UnitSystemKey,}
  }

  //   const city = cityName ?? DEFAULT_CITY;
  const base_api_url ="https://api.openweathermap.org/data/2.5/weather?";
  
  const params = `q=${cityName.toUpperCase()}&appid=${API_ID}&units=${DEFAULT_UNITS}`;
  const url = `${base_api_url}${params}`;


  // const response = await axios.get(url);
  const response = await fetch(url);
  if(response.status === 200){
    const data = await response.json();
    return {
      "message": "Success", 
      "data": data, 
      "units": DEFAULT_UNITS as UnitSystemKey,
    }
  }else{
    return {
      "message": `${response.statusText} ${response.status}`, 
      "data": null,
      "units": DEFAULT_UNITS as UnitSystemKey
    }
  }
    
}

