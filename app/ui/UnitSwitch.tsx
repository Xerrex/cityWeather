'use client'
import React, {useState} from 'react';
import { DEFAULT_UNITS } from '../lib/config';


function UnitSwitch() {
  const [units, setUnits] = useState(DEFAULT_UNITS);
  console.log("Units Switch", "Default units");

  return (
    <div className="flex gap-1.5 rounded-lg bg-gray-300 py-2 px-4 items-center text-black">
      <span>Units</span>
      <span>{DEFAULT_UNITS}</span>
      
      {/* <button type="button" className="text-white bg-blue-700  focus:outline-none 
      focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 
      mb-2 dark:bg-blue-600 dark:focus:ring-blue-800" >{units === "metric"? "Metric": "Imperial"}</button>

      <button type="button" className="text-white bg-green-700 hover:bg-green-800 focus:outline-none 
      focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 
      mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">{units === "imperial"? "Imperial": "Metric"}</button> */}
    </div>
  )
}

export default UnitSwitch;