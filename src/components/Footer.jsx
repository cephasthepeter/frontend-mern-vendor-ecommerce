import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp } from "react-icons/fa6";

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return (
        <footer className='bg-slate-900 text-white'>
            {/* Main Footer */}
            <div className='footer-main w-[90%] max-w-[1240px] mx-auto grid grid-cols-4 gap-x-10 gap-y-10 border-b border-slate-700 py-16 md-lg:py-10 sm:py-8'>
                {/* Brand Info */}
                <div className='footer-brand min-w-0'>
                    <div className='flex flex-col gap-4'>
                        <div className='text-2xl font-bold'>
                            Mamiglo <span className='text-amber-500'>EXCLUSIVE</span>
                        </div>
                        <p className='text-sm text-slate-300 leading-relaxed'>
                            Premium men's fashion accessories for the modern Nigerian man. Elevate your style with our curated collection of ties, bow ties, cufflinks, and more.
                        </p>
                        <ul className='flex flex-col gap-2 text-sm text-slate-400'>
                            <li><strong>Address:</strong> Lagos, Nigeria</li>
                            <li><strong>Phone:</strong> +234 (0) 811 160 98015</li>
                            <li><strong>Email:</strong> hello@mamiglo.com</li>
                        </ul> 
                    </div> 
                </div>

                {/* Links Sections */}
                <div className='footer-links col-span-3 min-w-0'>
                    <div className='footer-columns grid grid-cols-4 gap-x-8 gap-y-10'>
                        {/* Shop */}
                        <div>
                            <h3 className='font-bold text-lg mb-4 text-amber-500'>Shop</h3>
                            <ul className='flex flex-col gap-2 text-sm text-slate-300'>
                                <li><Link to='/products' className='hover:text-amber-500 transition'>All Products</Link></li>
                                <li><Link to='/products?category=ties' className='hover:text-amber-500 transition'>Ties</Link></li>
                                <li><Link to='/products?category=bow-ties' className='hover:text-amber-500 transition'>Bow Ties</Link></li>
                                <li><Link to='/products?category=cufflinks' className='hover:text-amber-500 transition'>Cufflinks</Link></li>
                                <li><Link to='/products?category=socks' className='hover:text-amber-500 transition'>Socks</Link></li>
                                <li><Link to='/products?category=pocket-squares' className='hover:text-amber-500 transition'>Pocket Squares</Link></li>
                                <li><Link to='/products?category=gift-sets' className='hover:text-amber-500 transition'>Gift Sets</Link></li>
                            </ul>
                        </div>

                        {/* Customer Service */}
                        <div>
                            <h3 className='font-bold text-lg mb-4 text-amber-500'>Customer Service</h3>
                            <ul className='flex flex-col gap-2 text-sm text-slate-300'>
                                <li><Link to='/contact' className='hover:text-amber-500 transition'>Contact Us</Link></li>
                                <li><Link to='/shipping' className='hover:text-amber-500 transition'>Shipping & Delivery</Link></li>
                                <li><Link to='/contact' className='hover:text-amber-500 transition'>Returns & Refunds</Link></li>
                                <li><Link to='/contact' className='hover:text-amber-500 transition'>FAQs</Link></li>
                                <li><Link to='/dashboard' className='hover:text-amber-500 transition'>Order Tracking</Link></li>
                            </ul>
                        </div>

                        {/* Company */}
                        <div>
                            <h3 className='font-bold text-lg mb-4 text-amber-500'>Company</h3>
                            <ul className='flex flex-col gap-2 text-sm text-slate-300'>
                                <li><Link to='/about' className='hover:text-amber-500 transition'>About Us</Link></li>
                                <li><Link to='/about' className='hover:text-amber-500 transition'>Privacy Policy</Link></li>
                                <li><Link to='/about' className='hover:text-amber-500 transition'>Terms & Conditions</Link></li>
                                <li><Link to='/contact' className='hover:text-amber-500 transition'>Careers</Link></li>
                            </ul>
                        </div>

                        {/* Newsletter */}
                        <div>
                            <h3 className='font-bold text-lg mb-4 text-amber-500'>Newsletter</h3>
                            <p className='text-sm text-slate-300 mb-4'>
                                Subscribe to get special offers and updates.
                            </p>
                            <div className='flex flex-col gap-2'>
                                <input 
                                    type="email" 
                                    placeholder='Enter your email' 
                                    className='px-3 py-2 bg-slate-800 border border-slate-700 rounded text-sm focus:outline-none focus:border-amber-500 text-white'
                                />
                                <button className='px-4 py-2 bg-amber-600 text-white font-semibold rounded hover:bg-amber-700 transition text-sm'>
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>

            {/* Social & Bottom */}
            <div className='w-[90%] max-w-[1240px] mx-auto py-8 flex flex-wrap justify-between items-center gap-4 sm:flex-col sm:items-start'>
                <div className='flex flex-wrap items-center gap-3'>
                    <span className='text-slate-400 text-sm'>Follow us:</span>
                    <a 
                        href="https://facebook.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className='w-[40px] h-[40px] flex items-center justify-center bg-slate-800 rounded-full hover:bg-amber-600 transition'
                    >
                        <FaFacebookF />
                    </a>
                    <a 
                        href="https://instagram.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className='w-[40px] h-[40px] flex items-center justify-center bg-slate-800 rounded-full hover:bg-amber-600 transition'
                    >
                        <FaInstagram />
                    </a>
                    <a 
                        href="https://twitter.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className='w-[40px] h-[40px] flex items-center justify-center bg-slate-800 rounded-full hover:bg-amber-600 transition'
                    >
                        <FaTwitter />
                    </a>
                    <a 
                        href="https://wa.me/2348111609015" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className='w-[40px] h-[40px] flex items-center justify-center bg-slate-800 rounded-full hover:bg-amber-600 transition'
                    >
                        <FaWhatsapp />
                    </a>
                </div>

                <p className='text-slate-400 text-sm text-center flex-1 sm:text-left'>
                    &copy; {currentYear} MamigloExclusive. All rights reserved. | Designed for the modern Nigerian man.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
