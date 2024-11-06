import React, { useEffect, useState } from "react";
import products from '../Data/productData.json'
import ProductCard from "../Components/ProductCard";
import ShopFilter from "../Components/ShopFilter";

const filter = {
  categories: ["all", "accessories", "dress", "jewellery", "cosmetics"],
  colors: ["all", "black", "red", "gold", "blue", "silver", "beige", "green"],
  priceRange: [
    { label: "under $50", min: 0, max: 50 },
    { label: "$50 - $100", min: 50, max: 100 },
    { label: "$100 - $200", min: 100, max: 200 },
    { label: "$200 - above", min: 200, max: Infinity },
  ],
};

const ShopPage = () => {

    const [displayProducts , setDisplayProducts] = useState(products)
    const [filterState , setFilterState] = useState({
        category: "all",
        color: "all",
        priceRange : ""
    }) 

    const applyFilter = () => {
        let filteredProducts = products

        if (filterState.category && filterState.category !== "all") {
            filteredProducts = filteredProducts.filter(product => product.category === filterState.category)
        }

        if (filterState.color && filterState.color !== "all") {
            filteredProducts = filteredProducts.filter(product => product.color === filterState.color)
        }

        if (filterState.priceRange) {
            const [minPrice , maxPrice] = filterState.priceRange.split('-').map(Number)
            filteredProducts = filteredProducts.filter(product => product.price  >= minPrice && product.price <= maxPrice   )
        }

        setDisplayProducts(filteredProducts)
    }

    useEffect(()=>{
       applyFilter()
    },[filterState])

    const clearFilters = () => {
        setFilterState({
            category: "all",
            color: "all",
            priceRange: ""
        })
    }

  return (
    <>
      <section className="section__container bg-primary-light">
        <h2 className="section__header capitalize">Shop Page</h2>
        <p className="section__subheader">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad placeat
          quae natus maiores? Facere, vel.
        </p>
      </section>

      <section className="section__container">
        <div className="flex flex-col md:flex-row md:gap-12 gap-8">
            {/* left side */}
           <ShopFilter 
                filter={filter}
                filterState={filterState}
                setFilterState={setFilterState}
                clearFilters={clearFilters}
           />

            {/* Right Side */}
            <div>
                <h3 className="text-xl font-medium mb-4">Product Available: {products.length}</h3>
                <ProductCard products={displayProducts}/>
            </div>
        </div>
      </section>
    </>
  );
};

export default ShopPage;
 