import { useDebouncedCallback } from 'use-debounce';
import { MagnifyingGlassIcon } from '@heroicons/react/16/solid';


function CitySearch() {
//   const searchParams = useSearchParams();
//   const pathname = usePathname();
//   const { replace } = useRouter();

  
  const handleSearch = useDebouncedCallback((cityName)=>{
    const params = new URLSearchParams(searchParams);
    if(cityName){
      params.set('city', cityName);
    }else{
      params.delete('city');
      // params.set('city', DEFAULT_CITY);
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <div className="relative flex flex-1 flex-shrink-0 w-full mb-2">
      <label htmlFor="search" className="sr-only">Search</label>
      <input className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm text-black
        outline-2 placeholder:text-gray-500" placeholder="Search a city" onChange={(e)=>handleSearch(e.target.value)}
        defaultValue={searchParams.get('city')?.toString()}/>

      <MagnifyingGlassIcon className="absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 
      text-gray-500 peer-focus:text-gray-900" />
    </div>
  )
}

export default CitySearch;
