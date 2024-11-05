import React from 'react'
import { Link } from 'react-router-dom'

const Categories = () => {

    const categories = [
        {name:"Accesories", path:"accessories", image:'./category-1.jpg'},
        {name:"Dress Collection", path:"dress", image:'./category-2.jpg'},
        {name:"Jwellery", path:"jwellery", image:'./category-3.jpg'},
        {name:"Cosmatic", path:"cosmatic", image:'./category-3.jpg'}
    ]

  return (
    <div className='product__grid'>
      {
        categories.map((category) => (
            <Link to={`/categories/${category.path}`} className='categories__card'>
                <img src={category.image} alt={category.name} />
                <h4>{category.name}</h4>
            </Link>
        ))
      }
    </div>
  )
}

export default Categories
