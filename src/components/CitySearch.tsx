import { useDebouncedCallback } from 'use-debounce';
import { MagnifyingGlassIcon } from '@heroicons/react/16/solid';
import { DEFAULT_CITY } from '../lib/config';


interface CitySearchProps {
    setCity: (cityName:string)=> void;
}


function CitySearch({setCity}: CitySearchProps) {

  
  const handleSearch = useDebouncedCallback((cityName)=>{
    setCity(cityName)
    
  }, 310);

  return (
    <div className="relative flex flex-1 flex-shrink-0 w-full mb-2">
      <label htmlFor="search" className="sr-only">Search</label>
      <input className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm text-black
        outline-2 placeholder:text-gray-500" placeholder="Search a city" onChange={(e)=>handleSearch(e.target.value)}
        defaultValue={DEFAULT_CITY}/>

      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 
      text-gray-500 peer-focus:text-gray-900" />
    </div>
  )
}

export default CitySearch;
