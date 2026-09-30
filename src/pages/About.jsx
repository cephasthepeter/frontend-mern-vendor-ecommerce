import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaCheckCircle, FaBullseye, FaHeart, FaGlobeAmericas } from 'react-icons/fa';

const About = () => {
    return (
        <div className='w-full bg-white'>
            <Header />

            {/* Hero Section */}
            <section className='bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16 md-lg:py-12'>
                <div className='w-[85%] lg:w-[90%] mx-auto'>
                    <h1 className='text-5xl md-lg:text-4xl font-bold mb-4'>About MamigloExclusive</h1>
                    <p className='text-xl text-slate-300 max-w-2xl'>
                        Crafting premium men's accessories for the modern Nigerian gentleman.
                    </p>
                </div>
            </section>

            {/* Brand Story */}
            <section className='py-16 md-lg:py-10 bg-white'>
                <div className='w-[85%] lg:w-[90%] mx-auto'>
                    <div className='grid grid-cols-2 md:grid-cols-1 gap-12 items-center'>
                        <div>
                            <h2 className='text-4xl font-bold text-slate-900 mb-6'>Our Story</h2>
                            <p className='text-slate-700 leading-8 mb-4'>
                                MamigloExclusive was founded with a simple mission: to provide Nigerian men with access to premium fashion accessories that don't compromise on quality or style.
                            </p>
                            <p className='text-slate-700 leading-8 mb-4'>
                                We believe that true style is in the details. A well-chosen tie, perfectly paired cufflinks, or elegant pocket square can transform an outfit and elevate confidence. Every piece in our collection is carefully selected to ensure it meets our exacting standards for quality, design, and durability.
                            </p>
                            <p className='text-slate-700 leading-8'>
                                Today, we're proud to be the go-to destination for discerning gentlemen who refuse to settle for ordinary.
                            </p>
                        </div>
                        <div className='bg-gradient-to-br from-amber-100 to-amber-50 rounded-lg p-8 border-2 border-amber-200'>
                            <p className='text-5xl font-bold text-amber-600 mb-4'>Est. 2024</p>
                            <p className='text-slate-700 font-semibold mb-4'>
                                Bringing Luxury to Every Nigerian Gentleman
                            </p>
                            <ul className='space-y-3'>
                                <li className='flex items-start gap-3'>
                                    <FaCheckCircle className='text-amber-600 mt-1 flex-shrink-0' />
                                    <span className='text-slate-700'>Premium quality accessories</span>
                                </li>
                                <li className='flex items-start gap-3'>
                                    <FaCheckCircle className='text-amber-600 mt-1 flex-shrink-0' />
                                    <span className='text-slate-700'>Affordable luxury pricing</span>
                                </li>
                                <li className='flex items-start gap-3'>
                                    <FaCheckCircle className='text-amber-600 mt-1 flex-shrink-0' />
                                    <span className='text-slate-700'>Fast delivery across Nigeria</span>
                                </li>
                                <li className='flex items-start gap-3'>
                                    <FaCheckCircle className='text-amber-600 mt-1 flex-shrink-0' />
                                    <span className='text-slate-700'>Exceptional customer support</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Values */}
            <section className='py-16 md-lg:py-10 bg-slate-50'>
                <div className='w-[85%] lg:w-[90%] mx-auto'>
                    <div className='text-center mb-12'>
                        <h2 className='text-4xl font-bold text-slate-900 mb-4'>Our Mission & Values</h2>
                        <div className='w-16 h-1 bg-amber-600 mx-auto'></div>
                    </div>

                    <div className='grid grid-cols-3 md-lg:grid-cols-2 sm:grid-cols-1 gap-8'>
                        <div className='bg-white p-8 rounded-lg border-l-4 border-amber-600'>
                            <div className='flex items-center gap-4 mb-4'>
                                <FaBullseye className='text-3xl text-amber-600' />
                                <h3 className='text-xl font-bold text-slate-900'>Our Mission</h3>
                            </div>
                            <p className='text-slate-700'>
                                To empower Nigerian men to express their individuality and confidence through carefully curated, premium men's accessories at accessible prices.
                            </p>
                        </div>

                        <div className='bg-white p-8 rounded-lg border-l-4 border-amber-600'>
                            <div className='flex items-center gap-4 mb-4'>
                                <FaHeart className='text-3xl text-amber-600' />
                                <h3 className='text-xl font-bold text-slate-900'>Quality</h3>
                            </div>
                            <p className='text-slate-700'>
                                We never compromise on quality. Every product is inspected to ensure it meets our high standards and will look perfect for years.
                            </p>
                        </div>

                        <div className='bg-white p-8 rounded-lg border-l-4 border-amber-600'>
                            <div className='flex items-center gap-4 mb-4'>
                                <FaGlobeAmericas className='text-3xl text-amber-600' />
                                <h3 className='text-xl font-bold text-slate-900'>Community</h3>
                            </div>
                            <p className='text-slate-700'>
                                We're building a community of style-conscious men who appreciate the finer things in life and support local excellence.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* What We Offer */}
            <section className='py-16 md-lg:py-10 bg-white'>
                <div className='w-[85%] lg:w-[90%] mx-auto'>
                    <h2 className='text-4xl font-bold text-slate-900 mb-4 text-center'>What We Offer</h2>
                    <div className='w-16 h-1 bg-amber-600 mx-auto mb-12'></div>

                    <div className='grid grid-cols-3 md-lg:grid-cols-2 sm:grid-cols-1 gap-8'>
                        <div className='text-center'>
                            <h3 className='text-2xl font-bold text-slate-900 mb-4'>Neckwear</h3>
                            <p className='text-slate-700 mb-4'>
                                Premium ties and bow ties in classic and contemporary styles, perfect for any occasion.
                            </p>
                        </div>

                        <div className='text-center'>
                            <h3 className='text-2xl font-bold text-slate-900 mb-4'>Wrist & Pocket</h3>
                            <p className='text-slate-700 mb-4'>
                                Elegant cufflinks, pocket squares, and socks that complete your formal and casual looks.
                            </p>
                        </div>

                        <div className='text-center'>
                            <h3 className='text-2xl font-bold text-slate-900 mb-4'>Accessories & More</h3>
                            <p className='text-slate-700 mb-4'>
                                Lapel pins, suspenders, wallets, and gift sets carefully curated for the discerning gentleman.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className='py-16 md-lg:py-10 bg-gradient-to-r from-amber-50 to-amber-100'>
                <div className='w-[85%] lg:w-[90%] mx-auto'>
                    <h2 className='text-4xl font-bold text-slate-900 mb-12 text-center'>Why Choose MamigloExclusive?</h2>

                    <div className='grid grid-cols-2 md:grid-cols-1 gap-8'>
                        <div className='flex gap-6'>
                            <div className='text-4xl text-amber-600 flex-shrink-0'>01</div>
                            <div>
                                <h3 className='text-xl font-bold text-slate-900 mb-2'>Curated Selection</h3>
                                <p className='text-slate-700'>
                                    Every piece is carefully selected for quality, style, and durability. We don't just sell accessories; we curate experiences.
                                </p>
                            </div>
                        </div>

                        <div className='flex gap-6'>
                            <div className='text-4xl text-amber-600 flex-shrink-0'>02</div>
                            <div>
                                <h3 className='text-xl font-bold text-slate-900 mb-2'>Affordable Luxury</h3>
                                <p className='text-slate-700'>
                                    Premium doesn't have to mean expensive. We believe every man deserves access to quality accessories.
                                </p>
                            </div>
                        </div>

                        <div className='flex gap-6'>
                            <div className='text-4xl text-amber-600 flex-shrink-0'>03</div>
                            <div>
                                <h3 className='text-xl font-bold text-slate-900 mb-2'>Fast & Reliable Delivery</h3>
                                <p className='text-slate-700'>
                                    Quick delivery across Nigeria with real-time tracking. Your accessories arrive in perfect condition.
                                </p>
                            </div>
                        </div>

                        <div className='flex gap-6'>
                            <div className='text-4xl text-amber-600 flex-shrink-0'>04</div>
                            <div>
                                <h3 className='text-xl font-bold text-slate-900 mb-2'>Exceptional Support</h3>
                                <p className='text-slate-700'>
                                    Questions? Need advice? Our team is available via WhatsApp and email to help you choose the perfect piece.
                                </p>
                            </div>
                        </div>

                        <div className='flex gap-6'>
                            <div className='text-4xl text-amber-600 flex-shrink-0'>05</div>
                            <div>
                                <h3 className='text-xl font-bold text-slate-900 mb-2'>Fashion Guidance</h3>
                                <p className='text-slate-700'>
                                    Style tips, matching guides, and outfit inspiration to help you get the most from your purchase.
                                </p>
                            </div>
                        </div>

                        <div className='flex gap-6'>
                            <div className='text-4xl text-amber-600 flex-shrink-0'>06</div>
                            <div>
                                <h3 className='text-xl font-bold text-slate-900 mb-2'>Nigerian Pride</h3>
                                <p className='text-slate-700'>
                                    Built by Nigerians, for Nigerians. We understand your style, your needs, and your market.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className='py-16 md-lg:py-10 bg-slate-900 text-white'>
                <div className='w-[85%] lg:w-[90%] mx-auto text-center'>
                    <h2 className='text-4xl font-bold mb-6'>Ready to Elevate Your Style?</h2>
                    <p className='text-xl text-slate-300 mb-8 max-w-2xl mx-auto'>
                        Explore our complete collection of premium men's accessories today.
                    </p>
                    <a
                        href='/products'
                        className='px-10 py-4 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-lg inline-block transition-all'
                    >
                        Shop Now
                    </a>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default About;
