import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Blog = () => {
    return (
        <div className='w-full bg-white'>
            <Header />
            <div className='w-[85%] lg:w-[90%] mx-auto py-16'>
                <h1 className='text-3xl font-bold text-[#059473] mb-4'>Blog</h1>
                <p className='text-slate-600 leading-7'>Explore our latest stories, product highlights, and shopping tips designed to help you discover great deals and make the most of your experience.</p>
            </div>
            <Footer />
        </div>
    );
};

export default Blog;
