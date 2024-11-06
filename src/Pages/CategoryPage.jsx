import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import products from '../Data/productData.json'

const CategoryPage = () => {

    const { categoryName } = useParams();
    console.log(categoryName);
    
    const [filterProducts, setFilterProducts] = useState([])

    useEffect(() => {
        const filtered = products.filter((product) => product.category === categoryName.toLowerCase())
        console.log("filtered", filtered);
        setFilterProducts(filtered)
    }, [categoryName])

    useEffect(() => {
        window.scrollTo(0, 0)
    })

    return (
        <>
            <section className="max-w-screen-2xl mx-auto py-20 px-4 bg-primary-light">
                <h2 className="text-3xl font-extrabold text-dark text-center mb-4 capitalize">{categoryName}</h2>
                <p className="max-w-lg mx-auto text-light text-center">{`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus incidunt illum magnam, beatae debitis ipsum!`}</p>
            </section>
        </>
    )
}

export default CategoryPage
