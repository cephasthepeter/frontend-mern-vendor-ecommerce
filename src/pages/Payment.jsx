import React, { useState } from 'react';
import Header from './../components/Header';
import Footer from './../components/Footer';
import { useLocation } from 'react-router-dom';
import Stripe from '../components/Stripe';
import Opay from '../components/Opay';

const Payment = () => {
    const { state: { price, items, orderId } } = useLocation();
    const [paymentMethod, setPaymentMethod] = useState('transfer');

    const paymentOptions = [
        { id: 'stripe', label: 'Stripe', image: 'http://localhost:3000/images/payment/stripe.png' },
        { id: 'cod', label: 'COD', image: 'http://localhost:3000/images/payment/cod.jpg' },
        { id: 'transfer', label: 'Transfer Now', image: 'http://localhost:3000/images/payment/opay.png' },
    ];

    return (
        <div>
            <Header />
            <section className='bg-[#eeeeee]'>
                <div className='w-[85%] lg:w-[90%] md:w-[90%] sm:w-[90%] mx-auto py-16 mt-4 '>
                    <div className='flex flex-wrap md:flex-col-reverse'>
                        <div className='w-7/12 md:w-full'>
                            <div className='pr-2 md:pr-0'>
                                <div className='flex flex-wrap border border-slate-200 bg-white shadow-sm overflow-hidden'>
                                    {paymentOptions.map((option) => (
                                        <button
                                            key={option.id}
                                            type='button'
                                            onClick={() => setPaymentMethod(option.id)}
                                            className={`w-[33.33%] border-r last:border-r-0 cursor-pointer py-8 px-4 transition ${paymentMethod === option.id ? 'bg-white border-b-4 border-b-[#059473]' : 'bg-slate-100'}`}
                                        >
                                            <div className='flex flex-col gap-[3px] justify-center items-center'>
                                                <img src={option.image} alt={option.label} className='h-12 object-contain' />
                                                <span className='mt-2 text-slate-700 font-medium'>{option.label}</span>
                                            </div>
                                        </button>
                                    ))}
                                </div>

                                {paymentMethod === 'stripe' && (
                                    <div>
                                        <Stripe orderId={orderId} price={price} />
                                    </div>
                                )}

                                {paymentMethod === 'cod' && (
                                    <div className='w-full px-4 py-8 bg-white shadow-sm border border-slate-200'>
                                        <button className='px-10 py-[6px] rounded-sm hover:shadow-green-500/20 hover:shadow-lg bg-[#059473] text-white'>Pay Now</button>
                                    </div>
                                )}

                                {paymentMethod === 'transfer' && (
                                    <div className='mt-6'>
                                        <Opay orderId={orderId} price={price} />
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className='w-5/12 md:w-full'>
                            <div className='pl-2 md:pl-0 md:mb-0'>
                                <div className='bg-white shadow p-5 text-slate-600 flex flex-col gap-3'>
                                    <h2 className='font-bold text-lg'>Order Summary</h2>
                                    <div className='flex justify-between items-center'>
                                        <span>{items} Items and Shipping Fee Included</span>
                                        <span>₦{price}</span>
                                    </div>
                                    <div className='flex justify-between items-center font-semibold'>
                                        <span>Total Amount</span>
                                        <span className='text-lg text-green-600'>₦{price}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Payment;