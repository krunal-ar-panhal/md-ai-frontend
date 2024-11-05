import React from 'react'
import Banner from './Banner'
import Categories from './Categories'
import HeroSection from './HeroSection'

const Home = () => {
  return (
    <div className='min-h-screen'>
      <Banner/> 
      <Categories/>
      <HeroSection/>
    </div>
  )
}

export default Home
