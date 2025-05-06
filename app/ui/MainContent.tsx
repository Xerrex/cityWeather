import React from 'react';
import {WeatherCard} from "./Card";
import { WeatherData } from '../lib/definitions';


function MainContent({weatherData }: {weatherData : WeatherData[]}) {
  

  return (
    <div className="p-4">
      <h1 className="text-black font-bold text-3xl mt-20 mb-10">Current Highlights</h1>
      <div className="flex flex-wrap gap-4">
        {weatherData && weatherData.map((data, index)=>(
          <div key={index} className="w-48">
            <WeatherCard  title={data.title} type={data.type} value={data.value}/>
          </div>))}
      </div>
     
    </div>
  )
}

export default MainContent
