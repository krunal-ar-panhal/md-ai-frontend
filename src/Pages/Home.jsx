import React from 'react'
import Banner from './Banner'
import Categories from './Categories'
import HeroSection from './HeroSection'
import TrendingProducts from './TrendingProducts'

const Home = () => {
  return (
    <div className='min-h-screen'>
      <Banner/> 
      <Categories/>
      <HeroSection/>
      <TrendingProducts/>
    </div>
  )
}

export default Home
