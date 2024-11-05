import React, { useState } from "react";
import ProductCard from "../Components/ProductCard";
import products from "../Data/productData.json";

const TrendingProducts = () => {
  const [visibleProducts, setVisibleProducts] = useState(8);

  const loadMoreProducts = () => {
    setVisibleProducts((prevCount) => prevCount + 4);
  };

  return (
    <section className="section__container bg-white">
      <h2 className="text-2xl font-bold text-center mb-4">Trending Products</h2>
      <p className="text-center text-gray-700 mb-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda similique obcaecati quas impedit omnis necessitatibus deserunt. Iusto unde sapiente sunt vel eveniet ex. Ratione, iusto!
      </p>
      <div className="section__container">
        <ProductCard products={products.slice(0, visibleProducts)} />
      </div>
      <div className="flex justify-center mt-8">
        {visibleProducts < products.length && (
          <button 
            className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-300"
            onClick={loadMoreProducts}
          >
            Load More
          </button>
        )}
      </div>
    </section>
  );
};

export default TrendingProducts;
