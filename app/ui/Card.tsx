import { WeatherData } from "../lib/definitions";



export function WeatherCard({title, type, value}: WeatherData) {

    return (
      <div className="rounded-xl bg-gray-200 p-2 shadow-sm text-black">
        <div className="flex p-4">
          {/* {Icon ? <Icon className="h-5 w-5 text-gray-700" /> : null} */}
          <h3 className="ml-2 text-sm font-medium">{title}</h3>
        </div>

        {type==="normal" && (<p className="truncate rounded-xl bg-white px-4 py-8 text-center text-2xl">
          {typeof value === "string" || typeof value === "number" ? value : JSON.stringify(value)}</p>)}
        
        {type==="sun" && typeof value === "object" && "sunrise" in value && "sunset" in value && (
          <div className="flex flex-col rounded-xl bg-white px-2 py-8 text-center text-lg">
            <span>Sunrise {value.sunrise}</span>
            <span>Sunset {value.sunset}</span>
          </div>
          
        )}

        {type==="wind" && typeof value === "object" && "speed" in value && "deg" in value && "gust" in value && (
          <div className="flex flex-col rounded-xl bg-white px-4 py-8 text-center text-xl">
          <span>Speed: {value.speed}</span>
          <span>Degrees: {value.deg}</span>
          <span>Gust: {value.deg}</span>
          </div>)}
        
        {type==="temp" && typeof value === "object" && "temp_min" in value && (
          <div className="flex flex-col rounded-xl bg-white px-4 py-8 text-center text-xl">
            <span>Low {value.temp_min}</span>
            <span>High {value.temp_max}</span>
          </div>)}
        
      </div>
    )
    
}