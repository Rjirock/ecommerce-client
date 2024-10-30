

'use client'

import { FacebookOutlined, InstagramOutlined, LinkedinOutlined, TwitterOutlined } from "@ant-design/icons"

export const Footer = () => {
    return (
        <div className="bg-gray-800 text-white py-6 mt-[50px] " >
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between">
                    {/* Navigation Links */}
                    <div className="mb-4 md:mb-0">
                        <h5 className="font-bold mb-2">Quick Links</h5>
                        <ul>
                            <li>
                                <a href="/about" className="text-gray-400 hover:text-white transition duration-300">About Us</a>
                            </li>
                            <li>
                                <a href="/shop" className="text-gray-400 hover:text-white transition duration-300">Shop</a>
                            </li>
                            <li>
                                <a href="/contact" className="text-gray-400 hover:text-white transition duration-300">Contact</a>
                            </li>
                            <li>
                                <a href="/privacy" className="text-gray-400 hover:text-white transition duration-300">Privacy Policy</a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="mb-4 md:mb-0">
                        <h5 className="font-bold mb-2">Contact Us</h5>
                        <p className="text-gray-400">Email: support@example.com</p>
                        <p className="text-gray-400">Phone: (123) 456-7890</p>
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex items-center space-x-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <FacebookOutlined className="text-gray-400 hover:text-white transition duration-300 text-2xl" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                            <TwitterOutlined className="text-gray-400 hover:text-white transition duration-300 text-2xl" />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <InstagramOutlined className="text-gray-400 hover:text-white transition duration-300 text-2xl" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <LinkedinOutlined className="text-gray-400 hover:text-white transition duration-300 text-2xl" />
                        </a>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="text-center mt-6">
                    <p className="text-gray-400">© {new Date().getFullYear()} Your Company. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    )
}