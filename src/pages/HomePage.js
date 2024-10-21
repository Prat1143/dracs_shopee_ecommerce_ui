import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../features/products/productSlice';
import ProductSlider from '../components/ProductSlider';
import CategoryGrid from '../components/CategoryGrid';
import LatestArrivals from '../components/LatestArrivals';
import NewsletterSubscription from '../components/NewsletterSubscription';
import SaleCountdownBanner from '../components/SaleCountdownBanner';

const HomePage = () => {
    const dispatch = useDispatch();
    const { items: products, status, error } = useSelector(state => state.products);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchProducts());
        }
    }, [status, dispatch]);

    if (status === 'loading') {
        return <div className="text-center py-12">Loading...</div>;
    }

    if (status === 'failed') {
        return <div className="text-center py-12 text-red-500">Error: {error}</div>;
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <ProductSlider />
            <CategoryGrid />
            <LatestArrivals products={products} />
            <NewsletterSubscription />
            <SaleCountdownBanner />
        </div>
    );
};

export default HomePage;