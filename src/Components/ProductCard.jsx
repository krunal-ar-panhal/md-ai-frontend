import React from 'react';
import { Link } from 'react-router-dom';
import RatingStars from './RatingStars';

const ProductCard = ({ products }) => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
                <div 
                    key={index} 
                    className="border rounded-lg shadow-md p-4 bg-white hover:shadow-lg transition-shadow duration-300 group"
                >
                    <div className="relative">
                        <Link to={`/shop/${product.id || product._id}`}>
                            <img 
                                src={product.image} 
                                alt={product.name} 
                                className="w-full h-64 object-cover rounded-lg"
                            />
                        </Link>
                        <div className="absolute top-3 right-3 ">
                            <button className="bg-blue-500 hover:bg-blue-600 px-2 py-1  text-white rounded-full shadow-lg  transition-all duration-300">
                                <i className="ri-shopping-cart-2-line text-lg"></i>
                            </button>
                        </div>
                    </div>
                    <div className="mt-4 text-center">
                        <h4 className="text-lg font-semibold text-gray-800">{product.name}</h4>
                        <p className="text-gray-500">
                            ${product.price} 
                            {product.oldPrice && (
                                <span className="line-through text-gray-400 ml-2">${product.oldPrice}</span>
                            )}
                        </p>
                        <RatingStars rating={product.rating} />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductCard;
