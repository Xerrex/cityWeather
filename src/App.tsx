// import { useState } from 'react';

function App() {

  return (
    <div className="min-h-screen bg-gray-300 flex-col p-2">
      <main className="flex flex-col md:flex-row gap-[10px] p-2">
        <div className="bg-white rounded w-full md:w-2/5">
          <div className="mx-auto mt-4 w-3/5">
            {/* <CitySearch /> */}
          </div>
          
          {/* <SideContent data={sideData}/> */}
        </div>
        
        <div className="bg-white rounded w-full md:3/5 p-4">
          {/* <MainContent weatherData ={mainData}/> */}
        </div>
      </main>
      

      <footer className="mb-0 flex gap-[24px] justify-center">
        {/* <Link href="#" className="text-black">Code</Link> */}
        {/* <Link href="https://xerrex.github.io/" target="_blank" className="text-black">Developer </Link> */}
        {/* <Link href="#"className="text-black">Others</Link> */}
      </footer>
    </div>
  )
}

export default App
