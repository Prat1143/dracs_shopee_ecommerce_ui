import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';
import { FaShoppingCart, FaStar } from 'react-icons/fa';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ ...product, quantity: 1 }));
    toast.success(`${product.title} added to cart!`, {
      position: 'bottom-right',
      duration: 2000,
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full">
      <Link to={`/product/${product.id}`} className="block flex-shrink-0">
        <div className="relative pt-[100%] bg-white">
          <img
            src={product.image}
            alt={product.title}
            className="absolute top-0 left-0 w-full h-full object-contain p-4"
          />
        </div>
      </Link>
      <div className="p-4 flex flex-col flex-grow">
        <Link to={`/product/${product.id}`} className="block mb-2">
          <h3 className="text-lg font-semibold line-clamp-2 hover:text-primary transition-colors">{product.title}</h3>
        </Link>
        <p className="text-gray-600 text-sm mb-2 flex-grow line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between mb-4">
          <span className="text-xl font-bold text-primary">${product.price.toFixed(2)}</span>
          <div className="flex items-center">
            <FaStar className="text-yellow-400 mr-1" />
            <span className="text-sm text-gray-600">{product.rating.rate.toFixed(1)}</span>
          </div>
        </div>
        <button
          onClick={handleAddToCart}
          className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors duration-300 flex items-center justify-center mt-auto"
        >
          <FaShoppingCart className="mr-2" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;