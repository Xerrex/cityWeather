import { WeatherData } from "../lib/definitions";



export function WeatherCard({data}: {data: WeatherData}) {

    return (
      <div className="rounded-xl bg-gray-200 p-2 shadow-sm text-black">
        <div className="flex p-4">
          {/* {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null} */}
          <h3 className="ml-2 text-sm font-bold">{data.title}</h3>
        </div>

          {data.type==="normal" && (<div className="flex rounded-xl bg-white px-2 py-8 justify-center">
            <span>{typeof data.value === "string" || typeof data.value === "number" ? data.value : JSON.stringify(data.value)}</span>
            <span className="ml-1">{data.unit}</span>
          </div>)}
        
        {data.type==="sun" && typeof data.value === "object" && "sunrise" in data.value && "sunset" in data.value && (
          <div className="flex flex-col rounded-xl bg-white px-2 py-8 text-center">
            <span>&#9728; Sunrise {data.value.sunrise}</span>
            <span>&#9788; Sunset {data.value.sunset}</span>
          </div>
          
        )}

        {data.type==="wind" && typeof data.value === "object" && "speed" in data.value && "deg" in data.value && "gust" in data.value && (
          <div className="flex flex-col items-center rounded-xl bg-white px-4 py-8">
            <div className="flex">
              <span>Speed {data.value.speed?.value }</span>
              <span className="ml-1">{data.value.speed?.unit }</span>
            </div>
            <div className="flex">
              <span>{data.value.deg?.value}</span>
              <span className="ml-1">{data.value.deg?.unit }</span>
            </div>
            <div className="flex">
              <span>Gust {data.value.gust?.value}</span>
              <span className="ml-1">{data.value.gust?.unit }</span>
            </div>
          </div>)}
        
        {data.type==="temp" && typeof data.value === "object" && "temp_min" in data.value && (
          <div className="flex justify-center rounded-xl bg-white px-4 py-8 text-center">
            <span>{data.value.temp_min} - {data.value.temp_max}</span>
             <span className="ml-1">{data.unit}</span> 
          </div>)}
        
      </div>
    )
    
}