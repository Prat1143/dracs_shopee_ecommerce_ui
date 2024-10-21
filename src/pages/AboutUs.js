import React from 'react';
import { FaShippingFast, FaCreditCard, FaHeadset } from 'react-icons/fa';

const AboutUs = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-center mb-8">About E-Shop</h1>

            <div className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
                <p className="text-gray-700 mb-4">
                    Founded in 2010, E-Shop has grown from a small startup to one of the leading e-commerce platforms in the country. Our journey began with a simple idea: to make quality products accessible to everyone, everywhere.
                </p>
                <p className="text-gray-700 mb-4">
                    Over the years, we've expanded our product range, improved our logistics, and invested heavily in customer service. Today, we pride ourselves on offering an unparalleled shopping experience to millions of satisfied customers.
                </p>
            </div>

            <div className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                <p className="text-gray-700 mb-4">
                    At E-Shop, our mission is to revolutionize the way people shop online. We strive to provide a seamless, enjoyable shopping experience, coupled with exceptional customer service. Our goal is to be more than just an e-commerce platform – we want to be your trusted partner in finding the perfect products for your lifestyle.
                </p>
            </div>

            <div className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center">
                        <FaShippingFast className="text-5xl text-primary mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Fast & Free Shipping</h3>
                        <p className="text-gray-700">Enjoy free shipping on all orders over $50, with lightning-fast delivery times.</p>
                    </div>
                    <div className="text-center">
                        <FaCreditCard className="text-5xl text-primary mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
                        <p className="text-gray-700">Shop with confidence using our secure payment gateway, supporting all major credit cards.</p>
                    </div>
                    <div className="text-center">
                        <FaHeadset className="text-5xl text-primary mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">24/7 Customer Support</h3>
                        <p className="text-gray-700">Our dedicated support team is always ready to assist you with any queries or concerns.</p>
                    </div>
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
                <p className="text-gray-700 mb-4">
                    Behind E-Shop is a diverse team of passionate individuals, each bringing unique skills and experiences to the table. From our tech-savvy developers to our trend-spotting buyers, every member of our team is committed to delivering the best possible shopping experience for you.
                </p>
            </div>
        </div>
    );
};

export default AboutUs;