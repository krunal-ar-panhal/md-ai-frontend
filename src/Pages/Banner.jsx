import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div className='section__container header__container'>
     <div className='header__content z-30'>
        <h4 className='uppercase'>UP TO 20% Disccount on</h4>
        <h1>Girl's Fashion</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat perspiciatis temporibus asperiores nulla! Quasi quas recusandae, libero dolorem possimus et tempore nemo alias ratione qui deserunt vel similique veniam eligendi commodi dignissimos porro laboriosam rem.</p>
        <button className='btn' ><Link to='/shop' className='btn'>EXPOLRE NOW</Link></button>
     </div>
     <div className='header__image'>
        <img src="./header.png" alt="" />
     </div>
    </div>
  )
}

export default Banner
