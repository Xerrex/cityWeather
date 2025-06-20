import Link from 'next/link';
import SideContent from './ui/SideContent';
import MainContent from './ui/MainContent';
import CitySearch from './ui/CitySearch';
// import {DEFAULT_CITY, DEFAULT_UNITS} from './lib/config';
import { weatherResponseParser } from './lib/utils';
import { UnitSystemKey } from './lib/definitions';
import { getCityWeather } from './lib/actions';
import { DEFAULT_CITY, DEFAULT_UNITS } from './lib/config';



export default async function Page(props: {searchParams?: Promise<{city?: string; page?: string;}>;}) {
  const searchParams = await props.searchParams;
  const cityName = searchParams?.city || DEFAULT_CITY;
  
  // if( searchParams?.city === null || searchParams?.city === undefined){
  //   cityName = DEFAULT_CITY;
  // }else{
  //   cityName = searchParams.city
  // }

  const res = await getCityWeather(cityName);
  // console.log(`getting weather data for ${cityName}`,res);

  // if(res.data === null){
  //   const params = new URLSearchParams(searchParams)
  //   params.set('city', DEFAULT_CITY);
  //   res = await getCityWeather(DEFAULT_CITY);
  // }

  
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
