// import React from 'react';
// import Image from 'next/image';
// import { Bars3BottomLeftIcon } from '@heroicons/react/16/solid';
// import { SideContentProps } from '../lib/definitions';


// function SideContent({data}:{data:SideContentProps}) {
//   return (
//     <div className="w-full flex flex-col p-2">
//       <div className="flex-grow justify-items-center">
//         <div className="w-full justify-items-center">
//           <Image src={data.icon} alt="Weather icon" width={200} height={200} />
//         </div>
        

//         <div className="p-2 flex flex-col">
//           <div className="flex justify-center">
//             <span className="text-5xl md:text-7xl text-black">{data.temperature.value}</span>
//             <span className="text-black text-4xl font-bold">{data.temperature.unit}</span>
//             {/* <span className="text-4xl text-black">C/F</span> */}
//           </div>
        
//           <div className="p-2 flex mt-2 items-center justify-center">
//             <span className="text-lg text-black font-bold">{data.day_of_week},</span>
//             <span className="text-black ml-1">{data.day} {data.month} {data.year}</span>
//             <span className="text-gray-500 font-bold ml-1.5">{data.time} ({data.timezone})</span>
//           </div>

//           <div className="border-t border-gray-200 my-4"></div>

//           <div className="p-2 flex justify-evenly md:flex-col mt-2">
//             <div className="mt-2 flex">
//               <Bars3BottomLeftIcon className="w-[30px] h-[30px] text-indigo-400"/>
//               <span className="text-black ml-1">{data.description}</span>
//             </div>

//            <div className="mt-2 flex">
//               {data.rain ? (
//                 <>
//                   <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" className="text-indigo-500 fill-current">
//                   <path d="M20.422 8.516c-.178-3.233-3.031-5.778-6.432-5.492-1.087-1.239-2.693-2.024-4.49-2.024-3.172 0-5.754 
//                   2.443-5.922 5.516-2.033.359-3.578 2.105-3.578 4.206 0 2.362 1.949 4.278 4.354 4.278h1.326c.771 1.198 2.124 2 
//                   3.674 2h10.291c2.406 0 4.355-1.916 4.355-4.278 0-2.101-1.545-3.847-3.578-4.206zm-15.395 4.484h-.673c-1.297 
//                   0-2.354-1.022-2.354-2.278 0-2.118 2.104-2.597 3.488-2.512-.05-1.356.137-5.21 4.012-5.21.967 0 1.714.25 
//                   2.29.644-1.823.922-3.096 2.746-3.212 4.872-2.022.358-3.697 2.127-3.551 4.484zm14.618 2h-10.291c-1.297 
//                   0-2.354-1.022-2.354-2.278 0-2.118 2.104-2.597 3.488-2.512-.05-1.356.137-5.21 4.012-5.21 3.771 0 4.229 
//                   3.771 4.012 5.209 1.509-.105 3.488.437 3.488 2.513 0 1.256-1.057 2.278-2.355 2.278zm-14.063 8l-1.41-1.41 
//                   3.59-3.59 1.41 1.41-3.59 3.59zm8.543-3.59l-1.41-1.41-3.59 3.59 1.41 1.41 3.59-3.59zm4.875 0l-1.41-1.41-3.59 
//                   3.59 1.41 1.41 3.59-3.59z"/></svg>

//                   <span className="text-black ml-1">Rain - {data.rain.value}</span>
//                   <span className="text-black ml-1">{data.rain.unit}</span>
//                 </>
//               ):(<span className="text-black ml-1">Rain data unavailable</span>)}
             
//             </div>
//           </div> 

//           <div className="mt-10 md:mt-50 p-8 bg-gray-400 rounded-lg w-full text-white font-bold flex justify-center">
//             {data.city_name}, {data.country}
//           </div>

//         </div>
//       </div>
    
//     </div>
//   )
// }

// export default SideContent