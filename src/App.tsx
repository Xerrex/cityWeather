import { useState, useEffect } from 'react';
import { getCityWeather } from './lib/actions';
import { DEFAULT_CITY} from './lib/config';
import { weatherResponseParser } from './lib/utils';
import { type WeatherResponse, type UnitSystemKey, type WeatherData } from './lib/definitions';
import SideContent, {type SideContentProps} from './components/SideContent';
import MainContent from './components/MainContent';
import CitySearch from './components/CitySearch';


type WeatherResType = {
  message: string;
  data: WeatherResponse;
  units?: UnitSystemKey;
}

function App() {
  const [weatherRes, setWeatherRes] = useState<WeatherResType | null>(null);
  const [city, setCity] = useState(DEFAULT_CITY);
  const [sideDataParsed, setSideDataParsed] = useState<SideContentProps | null>(null);
  const [mainDataParsed, setMainDataParsed] = useState<WeatherData[] | null>(null);

  
  useEffect(()=>{
    getCityWeather(city)
    .then((resData)=>{
      setWeatherRes(resData)
    })
  },[city])


  useEffect(() => {
    // setCity(DEFAULT_CITY)
    if (weatherRes && weatherRes.data && weatherRes.units) {
      const { sideData, mainData } = weatherResponseParser( weatherRes.data, weatherRes.units as UnitSystemKey);
      setSideDataParsed(sideData);
      setMainDataParsed(mainData);
    }
  }, [weatherRes]);

 

  return (
    <div className="overflow-x-hidden">
      <div className="min-h-full md:h-screen overflow-y-auto bg-gray-300 flex-col p-2">
        <main className="flex flex-col md:flex-row gap-[10px] p-2 h-[96%]">
          {}
          <div className="bg-white rounded w-full md:w-2/5">
            <div className="mx-auto mt-4 w-3/5">
              <CitySearch setCity={setCity}/>
            </div>
            
            <SideContent data={sideDataParsed}/>
          </div>
          
          <div className="bg-white rounded w-full md:3/5 p-4">
            <MainContent weatherData ={mainDataParsed}/>
          </div>
        </main>
        

        <footer className="mb-0 flex gap-[24px] justify-center py-2">
          <a href="https://github.com/Xerrex/cityWeather" target="_blank" className="text-black">Code</a>
          <a href="https://xerrex.github.io/" target="_blank" className="text-black">Developer</a>
        </footer>
      </div>
    </div>
  )
}

export default App
