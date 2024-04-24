//import React from 'react'
import troll from '../assets/TrollFace.png'
const Header = () => {
  return (
    <div className="flex items-center h-16 bg-gradient-to-r from-fuchsia-800 to-fuchsia-500 text-white p-5">
        <img src={troll} alt="" className='mr-3 h-full'/>
        <h2 className='text-2xl font-bold mr-auto'>Meme Generator</h2>
        <h3 className='text-xl font- '>React Course - Project 3</h3>
    </div>
  )
}

export default Header
