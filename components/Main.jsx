import React from 'react'
import LiveChannels from './LiveChannels'
import Categories from './Categories'
import Hero from './Hero'
import Iconbar from './Iconbar'

const Main = () => {
  return (
    <div className='absolute left-[64px] xl:left-[220px]'>
    <Hero />
    <Iconbar />
    <LiveChannels />
    <Categories />
    </div>
  )
}

export default Main