import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';
import { FaStar, FaStarHalfAlt, FaRegStar, FaTruck, FaShieldAlt, FaExchangeAlt } from 'react-icons/fa';
import toast from 'react-hot-toast';

const ProductDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector(state => state.products.items.find(p => p.id === parseInt(id)));
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <div className="container mx-auto px-4 py-8">Product not found</div>;
  }

  const handleAddToCart = () => {
    // dispatch(addToCart({ ...product, quantity }));
    dispatch(addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.image,
      quantity: quantity
    }));
    toast.success(`${product.title} added to cart!`);
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} className="text-yellow-400" />);
      } else if (i - 0.5 <= rating) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />);
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-400" />);
      }
    }
    return stars;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Images */}
        <div>
          <img src={product.image} alt={product.title} className="w-full h-96 object-contain mb-4" />
          <div className="flex space-x-2">
            {[product.image, product.image, product.image].map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${product.title} ${index + 1}`}
                className={`w-20 h-20 object-cover cursor-pointer ${selectedImage === index ? 'border-2 border-primary' : ''}`}
                onClick={() => setSelectedImage(index)}
              />
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <div className="flex items-center mb-4">
            {renderStars(product.rating.rate)}
            <span className="ml-2 text-gray-600">({product.rating.count} reviews)</span>
          </div>
          <p className="text-2xl font-bold text-primary mb-4">${product.price.toFixed(2)}</p>
          <p className="text-gray-700 mb-6">{product.description}</p>

          {/* Quantity Selector */}
          <div className="flex items-center mb-6">
            <span className="mr-4">Quantity:</span>
            <button
              className="bg-gray-200 px-3 py-1 rounded-l"
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
            >
              -
            </button>
            <span className="bg-gray-100 px-4 py-1">{quantity}</span>
            <button
              className="bg-gray-200 px-3 py-1 rounded-r"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="w-full bg-primary text-white py-3 px-6 rounded-md hover:bg-opacity-90 transition-colors duration-300 mb-6"
          >
            Add to Cart
          </button>

          {/* Additional Info */}
          <div className="border-t pt-6">
            <div className="flex items-center mb-4">
              <FaTruck className="text-primary mr-2" />
              <span>Free shipping on orders over $50</span>
            </div>
            <div className="flex items-center mb-4">
              <FaShieldAlt className="text-primary mr-2" />
              <span>2-year warranty</span>
            </div>
            <div className="flex items-center">
              <FaExchangeAlt className="text-primary mr-2" />
              <span>30-day return policy</span>
            </div>
          </div>
        </div>
      </div>

      {/* Product Description */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Product Description</h2>
        <p className="text-gray-700">{product.description}</p>
      </div>

      {/* Reviews Section (Placeholder) */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
        <p className="text-gray-700">Reviews would be displayed here...</p>
      </div>
    </div>
  );
};

export default ProductDetailsPage;