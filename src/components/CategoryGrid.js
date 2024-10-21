import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaTshirt, FaLaptop, FaGem, FaShoppingBag } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CategoryGrid = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getCategoryIcon = (category) => {
    switch (category.toLowerCase()) {
      case "men's clothing":
      case "women's clothing":
        return FaTshirt;
      case "electronics":
        return FaLaptop;
      case "jewelery":
        return FaGem;
      default:
        return FaShoppingBag;
    }
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products/categories');
        const categoriesWithIcons = response.data.map((category, index) => ({
          id: index + 1,
          name: category,
          Icon: getCategoryIcon(category)
        }));
        setCategories(categoriesWithIcons);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch categories');
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) return <div className="text-center py-12">Loading categories...</div>;
  if (error) return <div className="text-center py-12 text-red-500">{error}</div>;

  return (
    <div className="mt-12">
      <h2 className="text-3xl font-bold mb-6 text-center">Shop by Category</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Link 
            key={category.id} 
            to={`/shop?category=${encodeURIComponent(category.name)}`}
            className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
          >
            <div className="p-6 flex flex-col items-center">
              <category.Icon className="text-5xl mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold text-center">{category.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;