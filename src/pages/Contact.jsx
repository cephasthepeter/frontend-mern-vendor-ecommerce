import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp, FaClock, FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import toast from 'react-hot-toast';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.name || !formData.email || !formData.message) {
            toast.error('Please fill in all required fields');
            return;
        }
        toast.success('Thank you for your message! We\'ll get back to you soon.');
        setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
        });
    };

    return (
        <div className='w-full bg-white'>
            <Header />

            {/* Hero Section */}
            <section className='bg-gradient-to-r from-slate-900 to-slate-800 text-white py-16 md-lg:py-12'>
                <div className='w-[85%] lg:w-[90%] mx-auto'>
                    <h1 className='text-5xl md-lg:text-4xl font-bold mb-4'>Get In Touch</h1>
                    <p className='text-xl text-slate-300 max-w-2xl'>
                        Have questions? We'd love to hear from you. Contact us through any of the channels below.
                    </p>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className='py-16 md-lg:py-10 bg-slate-50'>
                <div className='w-[85%] lg:w-[90%] mx-auto'>
                    <div className='grid grid-cols-4 md-lg:grid-cols-2 sm:grid-cols-1 gap-8 mb-16'>
                        {/* Email */}
                        <div className='bg-white rounded-lg p-8 border-t-4 border-amber-600 text-center hover:shadow-lg transition'>
                            <div className='w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                                <FaEnvelope className='text-2xl text-amber-600' />
                            </div>
                            <h3 className='text-xl font-bold text-slate-900 mb-2'>Email</h3>
                            <p className='text-slate-700 mb-4'>Send us an email anytime</p>
                            <a href='mailto:hello@mamiglo.com' className='text-amber-600 font-semibold hover:text-amber-700'>
                                hello@mamiglo.com
                            </a>
                        </div>

                        {/* Phone */}
                        <div className='bg-white rounded-lg p-8 border-t-4 border-amber-600 text-center hover:shadow-lg transition'>
                            <div className='w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                                <FaPhone className='text-2xl text-amber-600' />
                            </div>
                            <h3 className='text-xl font-bold text-slate-900 mb-2'>Phone</h3>
                            <p className='text-slate-700 mb-4'>Call us during business hours</p>
                            <a href='tel:+2348111609015' className='text-amber-600 font-semibold hover:text-amber-700'>
                                +234 (0) 811 160 98015
                            </a>
                        </div>

                        {/* WhatsApp */}
                        <div className='bg-white rounded-lg p-8 border-t-4 border-green-500 text-center hover:shadow-lg transition'>
                            <div className='w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                                <FaWhatsapp className='text-2xl text-green-500' />
                            </div>
                            <h3 className='text-xl font-bold text-slate-900 mb-2'>WhatsApp</h3>
                            <p className='text-slate-700 mb-4'>Chat with us on WhatsApp</p>
                            <a href='https://wa.me/2348111609015' target='_blank' rel='noopener noreferrer' className='text-green-500 font-semibold hover:text-green-600'>
                                Start Chat
                            </a>
                        </div>

                        {/* Address */}
                        <div className='bg-white rounded-lg p-8 border-t-4 border-amber-600 text-center hover:shadow-lg transition'>
                            <div className='w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                                <FaMapMarkerAlt className='text-2xl text-amber-600' />
                            </div>
                            <h3 className='text-xl font-bold text-slate-900 mb-2'>Location</h3>
                            <p className='text-slate-700 mb-4'>Lagos, Nigeria</p>
                            <p className='text-sm text-slate-600'>
                                Serving all of Nigeria with nationwide delivery
                            </p>
                        </div>
                    </div>

                    {/* Business Hours */}
                    <div className='bg-amber-50 border-2 border-amber-200 rounded-lg p-8 text-center'>
                        <div className='flex items-center justify-center gap-3 mb-4'>
                            <FaClock className='text-2xl text-amber-600' />
                            <h3 className='text-2xl font-bold text-slate-900'>Business Hours</h3>
                        </div>
                        <p className='text-slate-700 mb-2'>Monday - Friday: 9:00 AM - 6:00 PM WAT</p>
                        <p className='text-slate-700 mb-2'>Saturday: 10:00 AM - 4:00 PM WAT</p>
                        <p className='text-slate-700'>Sunday: Closed</p>
                        <p className='text-sm text-slate-600 mt-4'>
                            WhatsApp messages are answered within 24 hours
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Form & FAQ */}
            <section className='py-16 md-lg:py-10 bg-white'>
                <div className='w-[85%] lg:w-[90%] mx-auto'>
                    <div className='grid grid-cols-2 md:grid-cols-1 gap-12'>
                        {/* Form */}
                        <div>
                            <h2 className='text-3xl font-bold text-slate-900 mb-8'>Send us a Message</h2>
                            <form onSubmit={handleSubmit} className='space-y-6'>
                                <div>
                                    <label className='block text-sm font-semibold text-slate-700 mb-2'>
                                        Full Name *
                                    </label>
                                    <input
                                        type='text'
                                        name='name'
                                        value={formData.name}
                                        onChange={handleChange}
                                        className='w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-100 transition'
                                        placeholder='Your full name'
                                        required
                                    />
                                </div>

                                <div>
                                    <label className='block text-sm font-semibold text-slate-700 mb-2'>
                                        Email Address *
                                    </label>
                                    <input
                                        type='email'
                                        name='email'
                                        value={formData.email}
                                        onChange={handleChange}
                                        className='w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-100 transition'
                                        placeholder='your.email@example.com'
                                        required
                                    />
                                </div>

                                <div>
                                    <label className='block text-sm font-semibold text-slate-700 mb-2'>
                                        Phone Number
                                    </label>
                                    <input
                                        type='tel'
                                        name='phone'
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className='w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-100 transition'
                                        placeholder='+234 (0) XXX XXXX XXXX'
                                    />
                                </div>

                                <div>
                                    <label className='block text-sm font-semibold text-slate-700 mb-2'>
                                        Subject
                                    </label>
                                    <input
                                        type='text'
                                        name='subject'
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className='w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-100 transition'
                                        placeholder='How can we help?'
                                    />
                                </div>

                                <div>
                                    <label className='block text-sm font-semibold text-slate-700 mb-2'>
                                        Message *
                                    </label>
                                    <textarea
                                        name='message'
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows='5'
                                        className='w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-100 transition resize-none'
                                        placeholder='Your message here...'
                                        required
                                    ></textarea>
                                </div>

                                <button
                                    type='submit'
                                    className='w-full px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-lg transition-all duration-300'
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>

                        {/* FAQ */}
                        <div>
                            <h2 className='text-3xl font-bold text-slate-900 mb-8'>Frequently Asked Questions</h2>
                            
                            <div className='space-y-6'>
                                <div className='border-l-4 border-amber-600 pl-6'>
                                    <h3 className='text-lg font-bold text-slate-900 mb-2'>How long does delivery take?</h3>
                                    <p className='text-slate-700'>
                                        Most orders within Lagos are delivered within 2-3 business days. Nationwide orders typically take 3-7 business days depending on location.
                                    </p>
                                </div>

                                <div className='border-l-4 border-amber-600 pl-6'>
                                    <h3 className='text-lg font-bold text-slate-900 mb-2'>What if I'm not satisfied with my order?</h3>
                                    <p className='text-slate-700'>
                                        We offer a 14-day return policy. If you're not completely satisfied, contact us and we'll arrange a return or exchange.
                                    </p>
                                </div>

                                <div className='border-l-4 border-amber-600 pl-6'>
                                    <h3 className='text-lg font-bold text-slate-900 mb-2'>Do you offer bulk orders?</h3>
                                    <p className='text-slate-700'>
                                        Yes! For corporate gifts and bulk orders, contact us directly via WhatsApp or email for special pricing and arrangements.
                                    </p>
                                </div>

                                <div className='border-l-4 border-amber-600 pl-6'>
                                    <h3 className='text-lg font-bold text-slate-900 mb-2'>Can I track my order?</h3>
                                    <p className='text-slate-700'>
                                        Absolutely! You'll receive a tracking number via email after your order ships. You can track it in real-time.
                                    </p>
                                </div>

                                <div className='border-l-4 border-amber-600 pl-6'>
                                    <h3 className='text-lg font-bold text-slate-900 mb-2'>Do you have a physical store?</h3>
                                    <p className='text-slate-700'>
                                        Currently, we operate online only. However, you can arrange to visit our office in Lagos by contacting us via WhatsApp.
                                    </p>
                                </div>

                                <div className='border-l-4 border-amber-600 pl-6'>
                                    <h3 className='text-lg font-bold text-slate-900 mb-2'>What payment methods do you accept?</h3>
                                    <p className='text-slate-700'>
                                        We accept all major payment methods including card payments, bank transfers, and online wallets.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Social Media */}
            <section className='py-16 md-lg:py-10 bg-slate-50'>
                <div className='w-[85%] lg:w-[90%] mx-auto text-center'>
                    <h2 className='text-3xl font-bold text-slate-900 mb-8'>Follow Us</h2>
                    <p className='text-slate-700 mb-8'>
                        Stay updated with the latest collections, style tips, and exclusive offers
                    </p>
                    
                    <div className='flex justify-center gap-6'>
                        <a
                            href='https://facebook.com'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='w-14 h-14 bg-slate-900 rounded-full flex items-center justify-center text-white hover:bg-amber-600 transition'
                        >
                            <FaFacebookF size={24} />
                        </a>
                        <a
                            href='https://instagram.com'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='w-14 h-14 bg-slate-900 rounded-full flex items-center justify-center text-white hover:bg-amber-600 transition'
                        >
                            <FaInstagram size={24} />
                        </a>
                        <a
                            href='https://twitter.com'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='w-14 h-14 bg-slate-900 rounded-full flex items-center justify-center text-white hover:bg-amber-600 transition'
                        >
                            <FaTwitter size={24} />
                        </a>
                        <a
                            href='https://wa.me/2348111609015'
                            target='_blank'
                            rel='noopener noreferrer'
                            className='w-14 h-14 bg-green-600 rounded-full flex items-center justify-center text-white hover:bg-green-700 transition'
                        >
                            <FaWhatsapp size={24} />
                        </a>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Contact;
