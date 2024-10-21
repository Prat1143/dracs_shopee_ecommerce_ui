import React from 'react';
import ProductCard from './ProductCard';

const LatestArrivals = ({ products }) => {
    return (
        <div className="mt-12">
            <h2 className="text-3xl font-bold mb-6 text-center">Latest Arrivals</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.slice(0, 8).map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default LatestArrivals;