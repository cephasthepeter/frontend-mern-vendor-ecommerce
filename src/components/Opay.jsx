import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';

const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
};

const Opay = ({ orderId, price }) => {
    const [submitted, setSubmitted] = useState(false);
    const [timeLeft, setTimeLeft] = useState(45 * 60);
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        if (!submitted) return undefined;

        const timer = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);

        return () => clearInterval(timer);
    }, [submitted]);

    const submitTransfer = async () => {
        if (!orderId) return;

        setIsSubmitting(true);
        try {
            await axios.post(
                `http://localhost:5000/api/order/transfer/pending/${orderId}`,
                {},
                { withCredentials: true },
            );
            setSubmitted(true);
        } catch (error) {
            console.log(error.response?.data || error.message);
        } finally {
            setIsSubmitting(false);
        }
    };

    const transferDetails = useMemo(
        () => [
            { label: 'Account Name', value: 'Mamigloexclusive' },
            { label: 'Account Number', value: '0812 345 6789' },
            { label: 'Bank / Wallet', value: 'Opay Transfer' },
            { label: 'Reference', value: `MM-${String(orderId || 'NEW').slice(-6).toUpperCase()}` },
        ],
        [orderId],
    );

    const amountLabel = new Intl.NumberFormat('en-NG', {
        style: 'currency',
        currency: 'NGN',
        maximumFractionDigits: 0,
    }).format(Number(price || 0));

    return (
        <div className='w-full bg-white p-6 shadow-sm border border-slate-200'>
            <div className='flex flex-col gap-5'>
                <div className='flex items-start justify-between gap-4 pb-3 border-b border-slate-200'>
                    <div>
                        <p className='text-xs uppercase tracking-[0.2em] text-amber-600 font-semibold'>Transfer Now</p>
                        <h3 className='text-2xl font-bold text-slate-800 mt-2'>Complete payment using OPay</h3>
                    </div>
                    <div className='rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700'>
                        Secure transfer
                    </div>
                </div>

                <div className='grid gap-4 md:grid-cols-2'>
                    <div className='rounded-xl border border-slate-200 bg-slate-50 p-4'>
                        <p className='text-xs uppercase tracking-[0.2em] text-slate-500'>Payment details</p>
                        <div className='mt-4 space-y-3 text-sm text-slate-700'>
                            {transferDetails.map((item) => (
                                <div key={item.label} className='flex items-center justify-between gap-3 border-b border-slate-200 pb-2 last:border-b-0 last:pb-0'>
                                    <span className='text-slate-500'>{item.label}</span>
                                    <span className='font-semibold text-slate-800 text-right'>{item.value}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='rounded-xl border border-amber-200 bg-amber-50 p-4'>
                        <p className='text-xs uppercase tracking-[0.2em] text-amber-700'>Amount due</p>
                        <h4 className='mt-3 text-4xl font-black text-slate-900'>{amountLabel}</h4>
                        <p className='mt-2 text-sm text-slate-600'>Order #{String(orderId || 'pending').slice(-8)}</p>
                        <div className='mt-5 rounded-lg bg-white border border-amber-200 p-3'>
                            <p className='text-xs uppercase tracking-[0.2em] text-slate-500'>Verification window</p>
                            <p className='mt-2 text-2xl font-bold text-amber-700'>{formatTime(timeLeft)}</p>
                        </div>
                    </div>
                </div>

                {!submitted ? (
                    <div className='rounded-xl border border-dashed border-slate-300 bg-slate-50 p-4'>
                        <p className='text-sm text-slate-600'>Transfer the exact amount above and upload your proof after payment. We verify manually before shipping is released.</p>
                        <button
                            type='button'
                            disabled={isSubmitting}
                            onClick={submitTransfer}
                            className='mt-4 px-6 py-3 rounded-md bg-[#059473] text-white hover:bg-[#047a62] hover:shadow-lg transition duration-200 font-semibold disabled:opacity-70'
                        >
                            {isSubmitting ? 'Submitting...' : 'I’ve Sent the Transfer'}
                        </button>
                    </div>
                ) : (
                    <div className='rounded-xl border border-amber-200 bg-amber-50 p-5'>
                        <div className='flex flex-col gap-2'>
                            <span className='inline-flex w-fit items-center rounded-full bg-amber-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-amber-900'>
                                Payment Verification Pending
                            </span>
                            <h4 className='text-xl font-bold text-slate-800'>Your transfer has been received and is awaiting review.</h4>
                            <p className='text-sm text-slate-600'>An admin will confirm the transfer and update your order once approved. You will only see a successful payment status after verification.</p>
                            <div className='mt-2 rounded-lg border border-amber-200 bg-white p-3'>
                                <p className='text-xs uppercase tracking-[0.2em] text-slate-500'>Pending review</p>
                                <p className='mt-2 text-lg font-semibold text-slate-800'>Approval countdown: {formatTime(timeLeft)}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Opay;
  