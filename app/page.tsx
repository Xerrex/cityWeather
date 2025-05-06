import Link from 'next/link';
import SideContent from './ui/SideContent';
import MainContent from './ui/MainContent';
import {API_ID, DEFAULT_CITY, DEFAULT_UNITS} from './lib/config';
import { weatherResponseParser } from './lib/utils';


async function getCityWeather(){
  /** Get City Weather */

  const base_api_url ="https://api.openweathermap.org/data/2.5/weather?";
  const params = `q=${DEFAULT_CITY}&appid=${API_ID}&units=${DEFAULT_UNITS}`
  const url = `${base_api_url}${params}`;
  console.log("Getting weather url", url);

  try {
    const response = await fetch(url);
    const data = await response.json()
    // console.log("Getting city weather response", data);
    return {"message": "Success", data: data}
  } catch (error) {
    console.error("Getting City Weather error", error);
    return {"message": "error", data: []}
  }
}

export default async function Home() {
  const res = await getCityWeather();
  const msg = res.message;
  console.log(msg);

  const {sideData, mainData} = weatherResponseParser(res.data)


  return (
    <div className="min-h-screen bg-gray-300 flex-col">
      <main className="flex gap-[10px] p-2 h-full">
        <div className="bg-white rounded w-1/5">
          <SideContent data={sideData}/>
        </div>
        
        <div className="bg-white rounded w-4/5">
          <MainContent weatherData ={mainData}/>
        </div>
        
      </main>
      

      <footer className="mb-0 flex gap-[24px] flex-wrap items-center justify-center">
        <Link href="#" className="text-black">CODE</Link>
        <Link href="#"className="text-black">Developer </Link>
        <Link href="#"className="text-black">Others</Link>
      </footer>
    </div>
  );
}
