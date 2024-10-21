import React from 'react';

const NewsletterSubscription = () => {
    return (
        <div className="bg-primary text-white py-12 mt-12 rounded-xl">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold mb-4 text-center">Subscribe to Our Newsletter</h2>
                <p className="text-xl mb-6 text-center">Get 30% off your first purchase!</p>
                <form className="flex flex-col md:flex-row justify-center items-center">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full md:w-1/2 px-4 py-2 rounded-l-lg focus:outline-none text-black"
                    />
                    <button
                        type="submit"
                        className="w-full md:w-auto px-6 py-2 bg-accent text-white font-semibold rounded-r-lg hover:bg-opacity-90 transition-colors mt-2 md:mt-0"
                    >
                        Subscribe
                    </button>
                </form>
            </div>
        </div>
    );
};

export default NewsletterSubscription;