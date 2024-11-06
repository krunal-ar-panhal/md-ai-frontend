import React from 'react'
import Banner from './Banner'
import Categories from './Categories'
import HeroSection from './HeroSection'
import TrendingProducts from './TrendingProducts'
import DealSection from './DealSection'
import PromoBanner from './PromoBanner'
import Blogs from './Blogs'

const Home = () => {
  return (
    <div className='min-h-screen'>
      <Banner/> 
      <Categories/>
      <HeroSection/>
      <TrendingProducts/>
      <DealSection/>
      <PromoBanner/>
      <Blogs/>
    </div>
  )
}

export default Home
