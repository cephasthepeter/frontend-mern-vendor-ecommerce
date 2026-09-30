import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaFacebookF } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa6"; 
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { customer_login,messageClear } from '../store/reducers/authReducer';
import toast from 'react-hot-toast';
import { FadeLoader } from 'react-spinners';

const Login = () => {

    const navigate = useNavigate()
    const {loader,errorMessage,successMessage,userInfo } = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const [state, setState] = useState({ 
        email: '',
        password: ''
    })

    const inputHandle = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
 
    const login = (e) => {
        e.preventDefault()
        dispatch(customer_login(state))
    }

    useEffect(() => { 
        if (successMessage) {
            toast.success(successMessage)
            dispatch(messageClear())  
        } 
        if (errorMessage) {
            toast.error(errorMessage)
            dispatch(messageClear())  
        } 
        if (userInfo) {
            navigate('/')
        }
    },[successMessage,errorMessage])


    return (
        <div>
             {
                loader && <div className='w-screen h-screen flex justify-center items-center fixed left-0 top-0 bg-[#38303033] z-[999]'>
                    <FadeLoader/>
                </div>
            }
            <Header/>
            <div className='login-page min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 px-3 py-8'>
                <div className='w-full max-w-5xl mx-auto login-shell'>
                    <div className='auth-layout overflow-hidden rounded-[24px] border border-white/15 bg-white/5 backdrop-blur-xl shadow-[0_20px_60px_rgba(15,23,42,0.45)]'>
                        <div className='px-4 py-5 sm:px-5 lg:px-5 lg:py-6 auth-form login-form'>
                            <div className='login-card bg-slate-900/20 border border-white/10 rounded-2xl p-4 backdrop-blur-md'>
                                <h2 className='text-center w-full text-2xl text-white font-bold mb-5'>Login</h2>

                                <form onSubmit={login} className='text-slate-200 space-y-3'>
                                    <div className='flex flex-col gap-1'>
                                        <label htmlFor="email" className='font-medium text-sm'>Email</label>
                                        <input onChange={inputHandle} value={state.email} className='w-full px-3 py-2.5 border border-white/15 bg-white/5 outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-500/30 rounded-md text-white placeholder:text-slate-300 text-sm' type="email" name="email" id="email" placeholder='Email' required />
                                    </div>

                                    <div className='flex flex-col gap-1'>
                                        <label htmlFor="password" className='font-medium text-sm'>Password</label>
                                        <input onChange={inputHandle} value={state.password} className='w-full px-3 py-2.5 border border-white/15 bg-white/5 outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-500/30 rounded-md text-white placeholder:text-slate-300 text-sm' type="password" name="password" id="password" placeholder='Password' required />
                                    </div>

                                    <button className='px-8 w-full py-2.5 bg-gradient-to-r from-amber-600 to-amber-700 shadow-lg hover:shadow-amber-500/40 text-white rounded-md transition duration-200 transform hover:-translate-y-0.5 active:translate-y-0 text-sm'>Login</button>
                                </form>

                                <div className='flex justify-center items-center py-3'>
                                    <div className='h-[1px] bg-white/10 w-full'></div>
                                    <span className='px-3 text-slate-300 text-xs'>Or</span>
                                    <div className='h-[1px] bg-white/10 w-full'></div>
                                </div>

                                <button className='px-8 w-full py-2.5 bg-indigo-500/90 shadow hover:shadow-indigo-500/40 text-white rounded-md flex justify-center items-center gap-2 mb-2 transition duration-200 hover:-translate-y-0.5 text-sm'>
                                    <span><FaFacebookF /></span>
                                    <span>Login With Facebook</span>
                                </button>

                                <button className='px-8 w-full py-2.5 bg-red-500/90 shadow hover:shadow-red-500/40 text-white rounded-md flex justify-center items-center gap-2 mb-2 transition duration-200 hover:-translate-y-0.5 text-sm'>
                                    <span><FaGoogle /></span>
                                    <span>Login With Google</span>
                                </button>

                                <div className='text-center text-slate-300 pt-1'>
                                    <p>Don't Have An Account? <Link className='text-amber-400 hover:text-amber-300 font-medium' to='/register'>Register</Link></p>
                                </div>
                            </div>
                        </div>

                        <div className='auth-visual relative min-h-[320px] w-full'>
                            <img src="http://localhost:3000/images/login.jpg" alt="" className='h-full w-full object-cover grayscale-[0.15]' />
                            <div className='absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent'></div>
                            <div className='absolute inset-x-0 bottom-0 p-5 text-white'>
                                <div className='rounded-2xl border border-white/15 bg-slate-900/25 backdrop-blur-md p-4'>
                                    <p className='text-[10px] uppercase tracking-[0.2em] text-amber-300 mb-2'>Welcome back</p>
                                    <h3 className='text-xl font-bold mb-1'>Shop premium essentials</h3>
                                    <p className='text-slate-200 text-xs'>Enjoy secure checkout, personalised offers, and great deals from your favourite brands.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default Login;