import React from 'react';
import {WeatherCard} from "./Card";
import { WeatherData } from '../lib/definitions';


function MainContent({weatherData }: {weatherData : WeatherData[]}) {
  

  return (
    <div className="p-4">
      <h1 className="text-black font-bold text-3xl mt-10 mb-10">Current Highlights</h1>
      <div className="flex flex-wrap gap-2 justify-center">
        {weatherData && weatherData.map((data, index)=>(
          <div key={index} className="w-64">
            <WeatherCard  data={data} />
          </div>))}
      </div>
     
    </div>
  )
}

export default MainContent
