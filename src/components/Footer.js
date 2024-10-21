import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-primary text-white">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* About Section */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Dracs Shopee</h3>
                        <p className="text-gray-300 mb-4">
                            Your one-stop shop for all things trendy and essential. We bring quality products right to your doorstep.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-white hover:text-accent transition-colors">
                                <FaFacebookF />
                            </a>
                            <a href="#" className="text-white hover:text-accent transition-colors">
                                <FaTwitter />
                            </a>
                            <a href="#" className="text-white hover:text-accent transition-colors">
                                <FaInstagram />
                            </a>
                            <a href="#" className="text-white hover:text-accent transition-colors">
                                <FaLinkedinIn />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
                            <li><a href="/shop" className="text-gray-300 hover:text-white transition-colors">Shop</a></li>
                            <li><a href="/about-us" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
                            <li><a href="/contact-us" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
                            {/* <li><a href="#" className="text-gray-300 hover:text-white transition-colors">FAQs</a></li> */}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                        <ul className="space-y-2 text-gray-300">
                            <li>123 E-commerce Street, Digital City, 12345</li>
                            <li>Phone: (123) 456-7890</li>
                            <li>Email: info@eshop.com</li>
                            <li>Mon - Fri: 9:00 AM - 5:00 PM</li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
                        <p className="text-gray-300 mb-4">Stay updated with our latest offers and products.</p>
                        <form className="flex">
                            <input
                                type="email"
                                placeholder="Your email"
                                className="flex-grow px-4 py-2 rounded-l-md focus:outline-none text-gray-900"
                            />
                            <button
                                type="submit"
                                className="bg-accent text-white px-4 py-2 rounded-r-md hover:bg-opacity-90 transition-colors"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Copyright */}
                <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
                    <p>&copy; 2024 Dracs Shopee. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;