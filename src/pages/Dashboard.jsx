import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaList } from 'react-icons/fa';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { IoIosHome } from "react-icons/io";
import { FaBorderAll } from "react-icons/fa6";
import { FaHeart } from "react-icons/fa";
import { IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";
import { RiLockPasswordLine } from "react-icons/ri";
import api from '../api/api';
import { useDispatch } from 'react-redux';
import { user_reset } from '../store/reducers/authReducer'
import { reset_count } from '../store/reducers/cardReducer'


const Dashboard = () => {
    const [filterShow, setFilterShow] =  useState(false)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const logout = async () => {
        try {
            const {data} = await api.get('/customer/logout')
            localStorage.removeItem('customerToken')
            dispatch(user_reset())
            dispatch(reset_count())
            navigate('/login')
            
        } catch (error) {
            console.log(error.response.data)
        }
    }

    return (
        <div>
           <Header/>
           <div className='bg-slate-200 mt-5'>
                <div className='w-[90%] mx-auto md-lg:block hidden'>
                    <div>
                        <button type='button' aria-expanded={filterShow} aria-label='Toggle account navigation' onClick={() => setFilterShow(!filterShow)} className='flex h-10 w-10 items-center justify-center rounded-md bg-green-600 text-white'><FaList/> </button>
                    </div> 
                </div>

        <div className='h-full mx-auto'>
            <div className='dashboard-layout py-5 flex md-lg:w-[90%] mx-auto relative gap-5'>
                <div onClick={() => setFilterShow(false)} className={`fixed inset-0 z-40 bg-slate-950/40 transition-opacity md-lg:block hidden ${filterShow ? 'visible opacity-100' : 'invisible opacity-0'}`} />
                <aside className={`dashboard-sidebar z-50 w-[270px] shrink-0 ml-4 rounded-md bg-white md-lg:fixed md-lg:left-0 md-lg:top-0 md-lg:ml-0 md-lg:h-screen md-lg:w-[min(270px,85vw)] md-lg:overflow-y-auto md-lg:rounded-none md-lg:shadow-xl md-lg:transition-transform ${filterShow ? 'md-lg:translate-x-0' : 'md-lg:-translate-x-full'}`}>

            <ul className='py-2 text-slate-600 px-4'> 
                <li className='hidden md-lg:flex justify-end py-2'>
                    <button type='button' onClick={() => setFilterShow(false)} aria-label='Close account navigation' className='flex h-9 w-9 items-center justify-center rounded-md bg-slate-100 text-xl'>×</button>
                </li>
                
                <li className='flex justify-start items-center gap-2 py-2'>
            <span className='text-xl'><IoIosHome /></span>
            <Link onClick={() => setFilterShow(false)} to='/dashboard' className='block' >Dashboard </Link>
                </li>
                <li className='flex justify-start items-center gap-2 py-2'>
            <span className='text-xl'><FaBorderAll/></span>
            <Link onClick={() => setFilterShow(false)} to='/dashboard/my-orders' className='block' >My Orders </Link>
                </li>
                <li className='flex justify-start items-center gap-2 py-2'>
            <span className='text-xl'><FaHeart/></span>
            <Link onClick={() => setFilterShow(false)} to='/dashboard/my-wishlist' className='block' >Wishlist </Link>
                </li>
                <li className='flex justify-start items-center gap-2 py-2'>
            <span className='text-xl'><IoChatbubbleEllipsesSharp/></span>
            <Link onClick={() => setFilterShow(false)} to='/dashboard/chat' className='block' >Chat  </Link>
                </li>
                <li className='flex justify-start items-center gap-2 py-2'>
            <span className='text-xl'><IoChatbubbleEllipsesSharp/></span>
            <Link onClick={() => setFilterShow(false)} to='/dashboard/support' className='block' >Contact Support</Link>
                </li>
                <li className='flex justify-start items-center gap-2 py-2'>
            <span className='text-xl'><RiLockPasswordLine/></span>
            <Link onClick={() => setFilterShow(false)} to='/dashboard/change-password' className='block' >Change Password  </Link>
                </li>
                <li onClick={logout} className='flex justify-start items-center gap-2 py-2 cursor-pointer'>
            <span className='text-xl'><IoMdLogOut/></span>
            <div  className='block' >Logout </div>
                </li> 

            </ul> 
                </aside>


                <div className='min-w-0 flex-1 md-lg:w-full'>
                    <div className='mx-4 md-lg:mx-0'>
                        <Outlet/>
                    </div>
                </div>
                
            </div>
        </div>        






           </div>

           <Footer/>
        </div>
    );
};

export default Dashboard;