import React, { useState, useEffect } from "react";
import products from "../Data/productData.json";
import ProductCard from "../Components/ProductCard";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const query = searchQuery.toLowerCase();
    const filtered = products.filter(
      (product) =>
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query)
    );
    setFilteredProducts(filtered);
  }, [searchQuery]);

  return (
    <>
      <section className="max-w-screen-2xl mx-auto py-20 px-4 bg-primary-light">
        <h2 className="text-3xl font-extrabold text-dark text-center mb-4 capitalize">
          Search Products
        </h2>
        <p className="max-w-lg mx-auto text-light text-center">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus
          incidunt illum magnam, beatae debitis ipsum!
        </p>
      </section>

      <section className="max-w-screen-2xl mx-auto py-8 px-4">
        <div className="border mb-8 rounded-3xl flex items-center w-full max-w-lg mx-auto px-4 py-2">
          <input
            type="text"
            placeholder="Search Product here..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full py-2 px-4 rounded-l-3xl outline-none border-none"
          />
          <i className="ri-search-line text-xl cursor-pointer ml-2"></i>
        </div>

        <ProductCard products={filteredProducts} />
      </section>
    </>
  );
};

export default Search;
