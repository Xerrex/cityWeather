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
        
        {type==="sun" && (<p className="truncate rounded-xl bg-white px-4 py-8 text-center text-2xl">
          Sunrise {value.sunrise} - Sunset {value.sunset}</p>)}

        {{type==="wind" && typeof value === "object" && (
          <div className="truncate rounded-xl bg-white px-4 py-8 text-center text-2xl">
          Speed: {value.speed.toString()}</div>)}
        
        {type==="temp" && (<p className="truncate rounded-xl bg-white px-4 py-8 text-center text-2xl">
          {value?.speed ? value.speed : }</p>)}}
        
      </div>
    )
    
}