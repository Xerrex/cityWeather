import Link from 'next/link';
import SideContent from './ui/SideContent';
import MainContent from './ui/MainContent';
import CitySearch from './lib/CitySearch';
import {API_ID, DEFAULT_CITY, DEFAULT_UNITS, APP_ENVIRONMENT} from './lib/config';
import { weatherResponseParser } from './lib/utils';
import { weatherResponsePlaceholder } from './lib/placeholder';
import { UnitSystemKey } from './lib/definitions';


async function getCityWeather(cityName: string){
  /** Get City Weather */
  
  if(APP_ENVIRONMENT !== "PROD"){
    return {"message": "Success (dev)", data: weatherResponsePlaceholder}
  }

  const city = cityName ?? DEFAULT_CITY;
  const base_api_url ="https://api.openweathermap.org/data/2.5/weather?";
  
  const params = `q=${city}&appid=${API_ID}&units=${DEFAULT_UNITS}`;
  const url = `${base_api_url}${params}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return {"message": "Success", data: data}
    
  } catch (error) {
    console.error("Getting City Weather error", error);
    return {"message": "error", data: []}
  }
}

export default async function Page(props: {searchParams?: Promise<{query?: string; page?: string;}>;}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || '';
  
  const res = await getCityWeather(query);

  const {sideData, mainData} = weatherResponseParser(res.data, DEFAULT_UNITS as UnitSystemKey);


  return (
    <div className="min-h-screen bg-gray-300 flex-col p-2">
      <main className="flex flex-col md:flex-row gap-[10px] p-2">
        <div className="bg-white rounded w-full md:w-2/5">
          <div className="mx-auto mt-4 w-3/5">
            <CitySearch />
          </div>
          
          <SideContent data={sideData}/>
        </div>
        
        <div className="bg-white rounded w-full md:3/5 p-4">
          <MainContent weatherData ={mainData}/>
        </div>
        
      </main>
      

      <footer className="mb-0 flex gap-[24px] justify-center">
        {/* <Link href="#" className="text-black">Code</Link> */}
        <Link href="https://xerrex.github.io/" target="_blank" className="text-black">Developer </Link>
        {/* <Link href="#"className="text-black">Others</Link> */}
      </footer>
    </div>
  );
}
