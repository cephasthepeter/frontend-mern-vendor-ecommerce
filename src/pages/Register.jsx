import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaFacebookF } from "react-icons/fa6";
import { FaGoogle } from "react-icons/fa6"; 
import { Link,useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { customer_register,messageClear } from '../store/reducers/authReducer';
import toast from 'react-hot-toast';
import { FadeLoader } from 'react-spinners';
 
const Register = () => {
    const navigate = useNavigate()
    const {loader,errorMessage,successMessage,userInfo } = useSelector(state => state.auth)
 
    const [state, setState] = useState({
        name: '',
        email: '',
        password: ''
    })
    const dispatch = useDispatch()

    const inputHandle = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
 
    const register = (e) => {
        e.preventDefault()
        dispatch(customer_register(state))
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
                    <div className='auth-layout overflow-hidden rounded-[28px] border border-white/15 bg-white/5 backdrop-blur-xl shadow-[0_25px_80px_rgba(15,23,42,0.45)]'>
                        <div className='px-6 py-8 sm:px-8 lg:px-10 lg:py-10 auth-form login-form'>
                            <div className='login-card bg-slate-900/20 border border-white/10 rounded-2xl p-6 backdrop-blur-md'>
                                <h2 className='text-center w-full text-3xl text-white font-bold mb-6'>Register</h2>

                                <form onSubmit={register} className='text-slate-200 space-y-4'>
                                    <div className='flex flex-col gap-1.5'>
                                        <label htmlFor="name" className='font-medium'>Name</label>
                                        <input onChange={inputHandle} value={state.name} className='w-full px-3 py-3 border border-white/15 bg-white/5 outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-500/30 rounded-md text-white placeholder:text-slate-300' type="text" name="name" id="name" placeholder='Name' required />
                                    </div>

                                    <div className='flex flex-col gap-1.5'>
                                        <label htmlFor="email" className='font-medium'>Email</label>
                                        <input onChange={inputHandle} value={state.email} className='w-full px-3 py-3 border border-white/15 bg-white/5 outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-500/30 rounded-md text-white placeholder:text-slate-300' type="email" name="email" id="email" placeholder='Email' required />
                                    </div>

                                    <div className='flex flex-col gap-1.5'>
                                        <label htmlFor="password" className='font-medium'>Password</label>
                                        <input onChange={inputHandle} value={state.password} className='w-full px-3 py-3 border border-white/15 bg-white/5 outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-500/30 rounded-md text-white placeholder:text-slate-300' type="password" name="password" id="password" placeholder='Password' required />
                                    </div>

                                    <button className='px-8 w-full py-3 bg-gradient-to-r from-amber-600 to-amber-700 shadow-lg hover:shadow-amber-500/40 text-white rounded-md transition duration-200 transform hover:-translate-y-0.5 active:translate-y-0'>Register</button>
                                </form>

                                <div className='flex justify-center items-center py-4'>
                                    <div className='h-[1px] bg-white/10 w-full'></div>
                                    <span className='px-3 text-slate-300'>Or</span>
                                    <div className='h-[1px] bg-white/10 w-full'></div>
                                </div>

                                <button className='px-8 w-full py-3 bg-indigo-500/90 shadow hover:shadow-indigo-500/40 text-white rounded-md flex justify-center items-center gap-2 mb-3 transition duration-200 hover:-translate-y-0.5'>
                                    <span><FaFacebookF /></span>
                                    <span>Login With Facebook</span>
                                </button>

                                <button className='px-8 w-full py-3 bg-red-500/90 shadow hover:shadow-red-500/40 text-white rounded-md flex justify-center items-center gap-2 mb-3 transition duration-200 hover:-translate-y-0.5'>
                                    <span><FaGoogle /></span>
                                    <span>Login With Google</span>
                                </button>

                                <div className='text-center text-slate-300 pt-1'>
                                    <p>Already have an account? <Link className='text-amber-400 hover:text-amber-300 font-medium' to='/login'>Sign In</Link></p>
                                </div>
                            </div>
                        </div>

                        <div className='auth-visual relative min-h-[420px] w-full'>
                            <img src="http://localhost:3000/images/login.jpg" alt="" className='h-full w-full object-cover grayscale-[0.15]' />
                            <div className='absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/30 to-transparent'></div>
                            <div className='absolute inset-x-0 bottom-0 p-8 text-white'>
                                <div className='rounded-2xl border border-white/15 bg-slate-900/25 backdrop-blur-md p-5'>
                                    <p className='text-xs uppercase tracking-[0.25em] text-amber-300 mb-3'>Create account</p>
                                    <h3 className='text-2xl font-bold mb-2'>Join the Mamiglo community</h3>
                                    <p className='text-slate-200 text-sm'>Track orders, save favourites, and get access to exclusive offers and new arrivals.</p>
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

export default Register;