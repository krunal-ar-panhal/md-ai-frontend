import React from 'react'
import { Link } from 'react-router-dom'

const HeroSection = () => {

    const cards = [
        {id :1, image:"./card-1.png", trend:"2024 Trend" , title:"Women Shirt"},
        {id :2, image:"./card-2.png", trend:"2024 Trend" , title:"Women Dresses"},
        {id :3, image:"./card-3.png", trend:"2024 Trend" , title:"Women Casuals"},
    ]

  return (
    <section className='section__container hero__container'>
        {
            cards.map((card)=>(
                <div key={card.id} className='hero__card'>
                    <img src={card.image} alt=' ' />
                <div className='hero__content'>
                    <p>{card.trend}</p>
                    <h4>{card.title}</h4>
                    <Link to='' href="">Exoplre Now</Link>
                </div>
                </div>
            ))
        }
    </section>
  )
}

export default HeroSection
