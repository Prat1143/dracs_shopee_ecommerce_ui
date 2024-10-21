import React from 'react';
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

const ContactUs = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
                    <p className="text-gray-700 mb-4">
                        We're always here to help. If you have any questions, concerns, or feedback, please don't hesitate to reach out to us. Our customer support team is available 24/7 to assist you.
                    </p>
                    <div className="space-y-4">
                        <div className="flex items-center">
                            <FaMapMarkerAlt className="text-primary mr-4" />
                            <span>123 E-commerce Street, Digital City, 12345</span>
                        </div>
                        <div className="flex items-center">
                            <FaPhone className="text-primary mr-4" />
                            <span>+1 (555) 123-4567</span>
                        </div>
                        <div className="flex items-center">
                            <FaEnvelope className="text-primary mr-4" />
                            <span>support@eshop.com</span>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Send Us a Message</h2>
                    <form>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                            <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                            <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                            <textarea id="message" name="message" rows="4" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary" required></textarea>
                        </div>
                        <button type="submit" className="bg-primary text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition-colors">Send Message</button>
                    </form>
                </div>
            </div>

            <div>
                <h2 className="text-2xl font-semibold mb-4">FAQs</h2>
                <div className="space-y-4">
                    <div>
                        <h3 className="text-xl font-semibold mb-2">What are your shipping rates?</h3>
                        <p className="text-gray-700">We offer free shipping on all orders over $50. For orders under $50, a flat rate of $5.99 applies.</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-2">How can I track my order?</h3>
                        <p className="text-gray-700">Once your order is shipped, you'll receive a tracking number via email. You can use this number to track your package on our website.</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-semibold mb-2">What is your return policy?</h3>
                        <p className="text-gray-700">We offer a 30-day return policy for most items. Please check our Returns page for more detailed information.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;