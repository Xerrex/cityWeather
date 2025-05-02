import Link from 'next/link';
import SideContent from './ui/SideContent';
import MainContent from './ui/MainContent';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-300 flex-col">
      <main className="flex gap-[10px] p-2 h-full">
        <div className="bg-white rounded w-1/5">
          <SideContent/>
        </div>
        
        <div className="bg-white rounded w-4/5">
          <MainContent/>
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
