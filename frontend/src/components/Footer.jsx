import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-10">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* About Section */}
                    <div>
                        <h2 className="text-lg font-bold mb-4">About Us</h2>
                        <p className="text-sm text-gray-400">
                            We provide the latest job opportunities across various domains to help you achieve your career goals.
                        </p>
                    </div>

                    {/* Links Section */}
                    <div>
                        <h2 className="text-lg font-bold mb-4">Quick Links</h2>
                        <ul className="text-sm text-gray-400">
                            <li className="mb-2 hover:text-white cursor-pointer">Home</li>
                            <li className="mb-2 hover:text-white cursor-pointer">Jobs</li>
                            <li className="mb-2 hover:text-white cursor-pointer">Browse</li>
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div>
                        <h2 className="text-lg font-bold mb-4">Contact Us</h2>
                        <ul className="text-sm text-gray-400">
                            <li className="mb-2">Email: info@example.com</li>
                            <li className="mb-2">Phone: +123 456 7890</li>
                            <li className="mb-2">Address: 123 Main St, Anytown, USA</li>
                        </ul>
                        {/* Social Media Icons */}
                        <div className="flex gap-4 mt-4">
                            <a href="#" className="hover:text-white"><i className="fab fa-facebook"></i></a>
                            <a href="#" className="hover:text-white"><i className="fab fa-twitter"></i></a>
                            <a href="#" className="hover:text-white"><i className="fab fa-linkedin"></i></a>
                            <a href="#" className="hover:text-white"><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-400">
                    &copy; {new Date().getFullYear()} Your Company. All rights reserved.
                </div>
            </div>
        </footer>
    );
}

export default Footer;
