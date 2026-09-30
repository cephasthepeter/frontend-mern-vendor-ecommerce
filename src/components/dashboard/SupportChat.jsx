import React, { useEffect, useRef, useState } from 'react';
import { IoSend } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import io from 'socket.io-client';
import api from '../../api/api';

const socket = io('http://localhost:5000');

const SupportChat = () => {
    const { userInfo } = useSelector((state) => state.auth);
    const [messages, setMessages] = useState([]);
    const [text, setText] = useState('');
    const [error, setError] = useState('');
    const [sending, setSending] = useState(false);
    const endRef = useRef(null);
    const token = localStorage.getItem('customerToken');
    const config = { headers: { Authorization: `Bearer ${token}` } };

    useEffect(() => {
        api.get('/chat/support/customer', config)
            .then(({ data }) => setMessages(data.messages || []))
            .catch(() => setError('Support chat is unavailable. Please sign in again.'));

        const receiveMessage = (message) => {
            if (message.receverId === userInfo?.id && message.senderId === '') {
                setMessages((current) => current.some((item) => item._id === message._id)
                    ? current
                    : [...current, message]);
            }
        };

        socket.on('support_message', receiveMessage);
        return () => socket.off('support_message', receiveMessage);
    }, [userInfo?.id]);

    useEffect(() => {
        endRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    const send = async (event) => {
        event.preventDefault();
        const message = text.trim();
        if (!message || sending) return;

        setSending(true);
        setError('');
        try {
            const { data } = await api.post('/chat/support/customer', { message }, config);
            setMessages((current) => [...current, data.message]);
            setText('');
        } catch (requestError) {
            setError(requestError.response?.data?.error || 'Your message could not be sent. Please try again.');
        } finally {
            setSending(false);
        }
    };

    return (
        <section className='mx-auto max-w-4xl overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm'>
            <header className='flex items-center justify-between border-b border-slate-200 px-5 py-4'>
                <div>
                    <p className='text-xs font-semibold uppercase tracking-wide text-amber-700'>Mamiglo customer care</p>
                    <h1 className='mt-1 text-xl font-semibold text-slate-900'>Message our team</h1>
                </div>
                <span className='rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700'>Here to help</span>
            </header>

            <div className='flex h-[min(58vh,540px)] flex-col gap-3 overflow-y-auto bg-slate-50 p-4 sm:p-6' aria-live='polite'>
                {!messages.length && (
                    <div className='m-auto max-w-sm text-center'>
                        <p className='font-medium text-slate-800'>How can we help, {userInfo?.name || 'there'}?</p>
                        <p className='mt-1 text-sm text-slate-500'>Send a message and our team will reply here.</p>
                    </div>
                )}
                {messages.map((message) => {
                    const fromCustomer = message.senderId === userInfo?.id;
                    return (
                        <div key={message._id} className={`flex ${fromCustomer ? 'justify-end' : 'justify-start'}`}>
                            <p className={`max-w-[85%] whitespace-pre-wrap break-words rounded-md px-4 py-3 text-sm ${fromCustomer ? 'bg-slate-900 text-white' : 'border border-slate-200 bg-white text-slate-800'}`}>
                                {message.message}
                            </p>
                        </div>
                    );
                })}
                <div ref={endRef} />
            </div>

            <form onSubmit={send} className='border-t border-slate-200 p-3 sm:p-4'>
                {error && <p role='alert' className='mb-2 text-sm text-red-700'>{error}</p>}
                <div className='flex gap-2'>
                    <input
                        aria-label='Write a message to customer care'
                        value={text}
                        onChange={(event) => setText(event.target.value)}
                        maxLength={2000}
                        placeholder='Write your message...'
                        className='min-w-0 flex-1 rounded-md border border-slate-300 px-4 py-3 text-sm outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-100'
                    />
                    <button disabled={!text.trim() || sending} aria-label='Send message' className='flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-slate-900 text-white transition hover:bg-amber-700 disabled:cursor-not-allowed disabled:opacity-50'>
                        <IoSend />
                    </button>
                </div>
            </form>
        </section>
    );
};

export default SupportChat;