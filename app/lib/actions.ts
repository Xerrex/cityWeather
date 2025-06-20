// 'use server'
import axios from "axios";
import { weatherResponsePlaceholder } from "./placeholder";
import { APP_ENVIRONMENT, API_ID, DEFAULT_UNITS } from "./config";



export async function getCityWeather(cityName: string){
  /** Get City Weather */
  
  if(APP_ENVIRONMENT !== "PROD"){
    return {"message": "Success (dev)", data: weatherResponsePlaceholder}
  }

//   const city = cityName ?? DEFAULT_CITY;
  const base_api_url ="https://api.openweathermap.org/data/2.5/weather?";
  
  const params = `q=${cityName.toUpperCase()}&appid=${API_ID}&units=${DEFAULT_UNITS}`;
  const url = `${base_api_url}${params}`;

  const response = await axios.get(url);
  if(response.status === 200){
    const data = await response.data;
    return {"message": "Success", "data": data, "error":null}
  }else{
    return {"message": `${response.statusText} ${response.status}`, "data": null, "error":null}
  }

  // try {
  //   const response = await axios.get(url);

  //   if(response.status === 200){
  //     const data = await response.data;
  //     return {"message": "Success", data: data, "error":null}
  //   }else{
  //     // console.log("response error", response);
  //     return {"message": `${response.statusText} ${response.status}`, data: null, "error":null}
  //   }

  // } catch (error) {
  //   // console.log("Error getting city weather", error);
  //   return {"message": "Error", data: null, "error":error}
  // }
}

