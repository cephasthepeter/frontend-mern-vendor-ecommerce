import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import axios from 'axios';
import CheckoutForm from './CheckoutForm';

const stripePublicKey = process.env.REACT_APP_STRIPE_PUBLIC_KEY;
const stripePromise = stripePublicKey ? loadStripe(stripePublicKey).catch((err) => {
    console.error('Failed to load Stripe:', err);
    return null;
}) : null;

const Stripe = ({ price, orderId }) => {
    const [clientSecret, setClientSecret] = useState('');
    const apperance = {
        theme: 'stripe'
    };
    const options = {
        apperance,
        clientSecret
    };

    const create_payment = async () => {
        if (!stripePublicKey) {
            console.warn('Stripe public key is not configured. Payment is disabled.');
            return;
        }

        try {
            const { data } = await axios.post('http://localhost:5000/api/order/create-payment', { price }, { withCredentials: true });
            setClientSecret(data.clientSecret);
        } catch (error) {
            console.log(error.response?.data || error.message);
        }
    };

    return (
        <div className='mt-4'>
            {!stripePublicKey ? (
                <div className='text-sm text-slate-600'>Stripe payment is not configured for this environment.</div>
            ) : clientSecret ? (
                <Elements options={options} stripe={stripePromise}>
                    <CheckoutForm orderId={orderId} />
                </Elements>
            ) : (
                <button onClick={create_payment} className='px-10 py-[6px] rounded-sm hover:shadow-green-700/30 hover:shadow-lg bg-green-700 text-white'>Start Payment</button>
            )}
        </div>
    );
};

export default Stripe;