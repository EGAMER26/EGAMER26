import {MagnifyingGlassPlus} from  'phosphor-react'

import './styles/main.css';

import logoImage from './assets/logo_nlw_eSports.svg';

function App() {
  return (
  <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
    <img src={logoImage} alt="" />

    <h1 className="text-6xl text-white font-black mt-20">
      Seu <span className="bg-nlw-gradient bg-clip-text text-transparent">duo</span> está aqui.
      </h1>

        <div className="grid grid-cols-6 gap-6 mt-6">
          <a href="" className="relative rounded-lg overflow-hidden">
            <img src="/image 1.png" alt="" />
            <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold block text-white">League of legends</strong>
            <span className="text-zinc-300 text-sm block">4 Anúncios</span>
          </div>
          </a>
          <a href="" className="relative">
            <img src="/image 2.png" alt="" />
        
             <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold block text-white">Dota 2</strong>
            <span className="text-zinc-300 text-sm block">4 Anúncios</span>
          </div>
          </a>
          <a href="" className="relative">
            <img src="/image 3.png" alt="" />
        
             <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold block text-white">Counter Strike</strong>
            <span className="text-zinc-300 text-sm block">4 Anúncios</span>
          </div>
          </a>
          <a href="" className="relative">
            <img src="/image 4.png" alt="" />
        
             <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold block text-white">Apex Legends</strong>
            <span className="text-zinc-300 text-sm block">4 Anúncios</span>
          </div>
          </a>
          <a href="" className="relative">
            <img src="/image 5.png" alt="" />
        
             <div className="w-full pt-b16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold block text-white">Fortnite</strong>
            <span className="text-zinc-300 text-sm block">4 Anúncios</span>
          </div>
          </a>
          <a href="" className="relative">
            <img src="/image 6.png" alt="" />
        
             <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 left-0 right-0">
            <strong className="font-bold block text-white">World of Warcraft</strong>
            <span className="text-zinc-300 text-sm block">4 Anúncios</span>
          </div>
          </a>
        </div>

    <div className="pt-1 bg-nlw-gradient self-stretch rounded-lg mt-8 overflow-hidden">
      <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
        <div className="">
          <strong className="text-2xl text-white font-black block">Não encontrou seu duo?</strong>
          <span className="text-zinc-400 ">Publique um anúncio para encontrar novos players!</span>
        </div>

        <button className="flex items-center gap-3 px-4 py-3 bg-violet-500 rounded text-white hover:bg-violet-600 hover:scale-105 hover:transition">
          <MagnifyingGlassPlus size={24}/>
          Publicar anúncio
        </button>
      </div>
    </div>

  </div>
  )
}

export default App
