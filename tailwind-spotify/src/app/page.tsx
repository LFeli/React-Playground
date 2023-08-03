import {Home as HomeIcon, Search, Library, ChevronLeft, ChevronRight, Play, SkipForward, SkipBack, Shuffle, Repeat, Mic2, List, Laptop2, Volume2, Maximize2,} from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">

          <div className='flex items-center gap-2'>
            <div className='w-3 h-3 bg-red-500 rounded-full' />
            <div className='w-3 h-3 bg-yellow-500 rounded-full' />
            <div className='w-3 h-3 bg-green-500 rounded-full' />
          </div>

          <nav className='space-y-5 mt-10'>
            <a href="" className='flex items-center gap-4 text-sm font-semibold text-zinc-200 '>
              <HomeIcon />
              Home
            </a>
            <a href="" className='flex items-center gap-4 text-sm font-semibold text-zinc-200 '>
              <Search />
              Search
            </a>
            <a href="" className='flex items-center gap-4 text-sm font-semibold text-zinc-200 '>
              <Library />
              Yout libary
            </a>
          </nav>

          <nav className='mt-8 pt-6 border-t border-zinc-800 flex flex-col gap-3'>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>#1</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Eletronic Code 🪄</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Fly</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Insane</a>
            <a href="" className='text-sm text-zinc-400 hover:text-zinc-100'>Tipo um repeat</a>
          </nav>
        </aside>
        <main className="flex-1 p-6">
          <div className='flex items-center gap-4'>
            <button className='rounded-full p-1 bg-black/20 hover:bg-black'>
              <ChevronLeft />
            </button>

            <button className='rounded-full p-1 bg-black/20 hover:bg-black'>
              <ChevronRight />
            </button>
          </div>

            <h1 className='font-bold text-3xl mt-10'>Good Afternoon</h1>

            <div className='grid grid-cols-3 gap-4 mt-8 '>
              <a href='#' className='bg-white/5 rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors group'>
                <Image src='/album.jpg' width={104} height={104} alt="Capa do album Hybrid Theory da banda Link Park"/>
                <strong>Hybrid Theory</strong>
                <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible'>
                  <Play />
                </button>
              </a>
              
              <a href='#' className='bg-white/5 rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors group'>
                <Image src='/album.jpg' width={104} height={104} alt="Capa do album Hybrid Theory da banda Link Park"/>
                <strong>Hybrid Theory</strong>
                <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible'>
                  <Play />
                </button>
              </a>

              <a href='#' className='bg-white/5 rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors group'>
                <Image src='/album.jpg' width={104} height={104} alt="Capa do album Hybrid Theory da banda Link Park"/>
                <strong>Hybrid Theory</strong>
                <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible'>
                  <Play />
                </button>
              </a>

              <a href='#' className='bg-white/5 rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors group'>
                <Image src='/album.jpg' width={104} height={104} alt="Capa do album Hybrid Theory da banda Link Park"/>
                <strong>Hybrid Theory</strong>
                <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible'>
                  <Play />
                </button>
              </a>

              <a href='#' className='bg-white/5 rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors group'>
                <Image src='/album.jpg' width={104} height={104} alt="Capa do album Hybrid Theory da banda Link Park"/>
                <strong>Hybrid Theory</strong>
                <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible'>
                  <Play />
                </button>
              </a>

              <a href='#' className='bg-white/5 rounded overflow-hidden flex items-center gap-4 hover:bg-white/10 transition-colors group'>
                <Image src='/album.jpg' width={104} height={104} alt="Capa do album Hybrid Theory da banda Link Park"/>
                <strong>Hybrid Theory</strong>
                <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black ml-auto mr-8 invisible group-hover:visible'>
                  <Play />
                </button>
              </a>

            </div>

            <h2 className='font-bold text-2xl mt-10'>Made for you</h2>
              <div className='grid grid-cols-5 gap-4 mt-4'>
                <a href='#' className='bg-white/5 p-3 rounded-md flex flex-col gap-2 hover:bg-white/10 transition-colors'>
                  <Image src='/album.jpg' width={120} height={120} alt="Capa do album Hybrid Theory da banda Link Park" className='w-full'/>
                  <strong className='font-semibold'>Daily Mix 1</strong>
                  <span className='text-zinc-400 text-sm'>Spotify</span>
                </a>
              </div>
        </main>
      </div>
      <footer className="bg-zinc-800 border-t border-zinc-700 px-6  py-4 flex items-center justify-between fixed bottom-0 w-full">
        <div className='flex items-center gap-2'>
          <Image src='/album.jpg' width={64} height={64} alt="Capa do album Hybrid Theory da banda Link Park"/>
          <div className='flex flex-col gap-1'>
            <strong className='font-normal'>Papercut</strong>
            <span className='text-xs text-zinc-400'>Linkin Park</span>
          </div>
        </div>
        <div className='flex flex-col items-center gap-2'>
          <div className='flex items-center gap-6'>
            <Shuffle className='text-zinc-200' size={20}/>

            <SkipBack className='text-zinc-200' size={20}/>

            <button className='w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-white text-black ml-auto'>
              <Play />
            </button>

            <SkipForward className='text-zinc-200' size={20}/>

            <Repeat className='text-zinc-200' size={20}/>
          </div>

          <div className='flex items-center gap-2'>
            <span className='text-xs text-zinc-500'>0:31</span>
            <div className='h-1 rounded-full w-96 bg-zinc-600'>
              <div className='bg-zinc-200 w-40 h-1 rounded-full'></div>
            </div>
            <span className='text-xs text-zinc-500'>2:14</span>
          </div>
        </div>

        <div className='flex items-center gap-2'>
          <Mic2 size={20} />
          <List size={20}/>
          <Laptop2 size={20} />
          <div className='flex items-center gap-2'>
            <Volume2 />
            <div className='h-1 rounded-full w-24 bg-zinc-600'>
              <div className='bg-zinc-200 w-6 h-1 rounded-full'></div>
            </div>
          </div>
          <Maximize2 size={20}/>
        </div>
      </footer>
    </div>
  )
}
