import React from 'react';
import {Card} from "./Card";


function MainContent() {
  
  const weatherdata: WeatherData[] = [
    {title: "Country", value:"KE"},
    {title: "Feels Like", value: 25.53},
    {title: "Temperature", value:{
      "current": 25.87,
      "temp_min": 25.87,
      "temp_max": 25.87
    }},
    {title: "Sea Level", value:"1021"},
    {title: "Ground Level", value:"918"},
    {title: "Humidity", value:"39%"},
    {title: "Atmospheric Pressure", value:"1009Hpa"},
    {title: "Visibility", value:"10000"},
    {title: "Wind", value: {
      speed:"4.16m/s",
      deg: "78%",
      gust: "3.47m/s"
    }}
  ]

  return (
    <div className="p-4">
      <h1 className="text-black font-bold text-3xl mt-20 mb-10">Current Hightlights</h1>
      <div className="flex flex-wrap gap-4">
        {weatherdata && weatherdata.map((data, index)=>(
          <div key={index} className="w-48">
            <Card  title={data.title}/>
          </div>))}
      </div>
     
    </div>
  )
}

export default MainContent
