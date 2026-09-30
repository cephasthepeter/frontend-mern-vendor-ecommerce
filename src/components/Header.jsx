import React, { useEffect, useState } from 'react';
import { MdEmail } from "react-icons/md";
import { IoMdPhonePortrait } from "react-icons/io";
import { FaFacebookF, FaList, FaLock, FaUser } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { IoMdArrowDropdown } from "react-icons/io";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaHeart } from "react-icons/fa6";
import { FaCartShopping } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io"; 
import { useDispatch, useSelector } from 'react-redux';
import { get_card_products, get_wishlist_products } from '../store/reducers/cardReducer';

const Header = () => {
    
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {categorys} = useSelector(state => state.home) 
    const {userInfo} = useSelector(state => state.auth) 
    const {card_product_count,wishlist_count} = useSelector(state => state.card) 

    const {pathname} = useLocation()
     
    const [showSidebar, setShowSidebar] = useState(true);
    const [categoryShow, setCategoryShow] = useState(true);
     

    const [searchValue, setSearchValue] = useState('')
    const [category, setCategory] = useState('')

    const search = () => {
        navigate(`/products/search?category=${category}&&value=${searchValue}`)
    }

    const redirect_card_page = () => {
        if (userInfo) {
            navigate('/card')
        } else {
            navigate('/login')
        }
    } 

    useEffect(() => {
        if (userInfo) {
            dispatch(get_card_products(userInfo.id))
            dispatch(get_wishlist_products(userInfo.id))
        }  
    },[userInfo])

    return (
        <div className='w-full bg-white'>
            {/* Top Bar */}
            <div className='header-top bg-slate-900 text-white md-lg:hidden'>
                <div className='w-[85%] lg:w-[90%] mx-auto'>
                    <div className='flex w-full justify-between items-center h-[50px] text-sm'>
                        <ul className='flex justify-start items-center gap-8 font-medium'>
                            <li className='flex justify-center items-center gap-2 text-xs'>
                                <span><MdEmail /></span>
                                <span>hello@mamiglo.com</span>
                            </li>

                            <li className='flex justify-center items-center gap-2 text-xs'>
                                <span><IoMdPhonePortrait  /></span>
                                <span>+234 (0) 811 160 98015</span>
                            </li> 
                        </ul>

                        <div className='flex justify-center items-center gap-10'>
                            <div className='flex justify-center items-center gap-3'>
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className='hover:text-amber-500 transition'>
                                    <FaFacebookF size={14} />
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className='hover:text-amber-500 transition'>
                                    <FaInstagram size={14} />
                                </a>
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className='hover:text-amber-500 transition'>
                                    <FaTwitter size={14} />
                                </a>
                                <a href="https://wa.me/2348111609015" target="_blank" rel="noopener noreferrer" className='hover:text-amber-500 transition'>
                                    <FaWhatsapp size={14} />
                                </a>
                            </div>

                            {userInfo ? (
                                <Link className='flex cursor-pointer justify-center items-center gap-2 text-xs hover:text-amber-500 transition' to='/dashboard'>
                                    <span><FaUser /></span>
                                    <span>{userInfo.name}</span>
                                </Link>
                            ) : (
                                <Link to='/login' className='flex cursor-pointer justify-center items-center gap-2 text-xs hover:text-amber-500 transition'>
                                    <span><FaLock /></span>
                                    <span>Login</span>
                                </Link>
                            )}
                        </div> 
                    </div> 
                </div> 
            </div>

            {/* Main Header */}
            <div className='w-full bg-white border-b border-slate-200'>
                <div className='w-[85%] lg:w-[90%] mx-auto'>
                    <div className='h-[80px] md-lg:h-[100px] flex justify-between items-center flex-wrap'>
                        {/* Logo */}
                        <div className='md-lg:w-full w-3/12 md-lg:pt-4'>
                            <div className='flex justify-between items-center'>
                                <Link to="/" className='flex items-center gap-2'>
                                    <div className='text-2xl font-bold text-slate-900'>
                                        Mamiglo
                                    </div>
                                    <div className='text-xs font-semibold text-amber-600'>EXCLUSIVE</div>
                                </Link>
                                <div className='justify-center items-center w-[30px] h-[30px] bg-slate-100 text-slate-600 border border-slate-300 rounded-sm cursor-pointer lg:hidden md-lg:flex xl:hidden hidden hover:bg-slate-200 transition' onClick={() => setShowSidebar(false)}>
                                    <span><FaList /></span>
                                </div>
                            </div> 
                        </div>
    
                        {/* Navigation */}
                        <div className='md-lg:w-full w-9/12'>
                            <div className='flex justify-between md-lg:justify-center items-center flex-wrap pl-8'>
                                <ul className='flex justify-start items-center gap-8 text-sm font-semibold text-slate-700 md-lg:hidden'>
                                    <li>
                                        <Link to='/' className={`p-2 block hover:text-amber-600 transition ${pathname === '/' ?  'text-amber-600 border-b-2 border-amber-600' : '' } `}>
                                            HOME
                                        </Link>
                                    </li>
                                    <li className='group relative'>
                                        <Link to='/products' className={`p-2 block hover:text-amber-600 transition ${pathname.includes('/products') ?  'text-amber-600 border-b-2 border-amber-600' : '' } `}>
                                            SHOP
                                        </Link>
                                        {categorys.length > 0 && (
                                            <ul className='absolute left-0 mt-0 w-48 bg-white border border-slate-200 rounded-sm shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50'>
                                                {categorys.map((cat, i) => (
                                                    <li key={i}>
                                                        <Link 
                                                            to={`/products?category=${cat.slug}`}
                                                            className='block px-4 py-2 text-sm hover:bg-amber-50 hover:text-amber-600 transition'
                                                        >
                                                            {cat.name}
                                                        </Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </li>
                                    <li>
                                        <Link to='/about' className={`p-2 block hover:text-amber-600 transition ${pathname === '/about' ?  'text-amber-600 border-b-2 border-amber-600' : '' } `}>
                                            ABOUT
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to='/contact' className={`p-2 block hover:text-amber-600 transition ${pathname === '/contact' ?  'text-amber-600 border-b-2 border-amber-600' : '' } `}>
                                            CONTACT
                                        </Link>
                                    </li>
                                </ul>

                                {/* Cart and Wishlist Icons */}
                                <div className='flex md-lg:hidden justify-center items-center gap-6 pl-4'>
                                    <div onClick={() => navigate(userInfo ? '/dashboard/my-wishlist' : '/login')} 
                                        className='relative flex justify-center items-center cursor-pointer w-[40px] h-[40px] rounded-full bg-slate-100 hover:bg-amber-100 hover:text-amber-600 transition'>
                                        <span className='text-lg text-slate-600 group-hover:text-amber-600'><FaHeart /></span>
                                        {wishlist_count !== 0 && (
                                            <div className='w-[20px] h-[20px] absolute bg-red-500 rounded-full text-white text-xs flex justify-center items-center -top-[3px] -right-[5px] font-bold'>
                                                {wishlist_count}
                                            </div>
                                        )}                  
                                    </div>

                                    <div onClick={redirect_card_page} 
                                        className='relative flex justify-center items-center cursor-pointer w-[40px] h-[40px] rounded-full bg-slate-100 hover:bg-amber-100 hover:text-amber-600 transition'>
                                        <span className='text-lg text-slate-600'><FaCartShopping /></span>
                                        {card_product_count !== 0 && (
                                            <div className='w-[20px] h-[20px] absolute bg-red-500 rounded-full text-white text-xs flex justify-center items-center -top-[3px] -right-[5px] font-bold'>
                                                {card_product_count}
                                            </div> 
                                        )} 
                                    </div> 
                                </div> 
                            </div> 
                        </div>
                    </div> 
                </div>
            </div>

            {/* Search Bar */}
            <div className='w-[85%] lg:w-[90%] mx-auto py-6 md-lg:hidden'>
                <div className='flex gap-3 items-center max-w-5xl mx-auto'>
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        aria-label='Search by category'
                        className='w-1/4 min-w-[170px] px-3 py-3 border border-slate-300 rounded-md bg-white focus:outline-none focus:border-amber-600 text-sm text-slate-700'
                    >
                        <option value=''>All categories</option>
                        {categorys.map((cat, i) => (
                            <option key={i} value={cat.name}>{cat.name}</option>
                        ))}
                    </select>
                    <input 
                        type="text" 
                        placeholder='Search for accessories...'
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        className='w-full max-w-2xl px-4 py-3 border border-slate-300 rounded-md focus:outline-none focus:border-amber-600 text-sm'
                    />
                    <button 
                        onClick={search}
                        className='px-6 py-3 bg-slate-900 text-white font-semibold rounded-md hover:bg-amber-600 transition text-sm whitespace-nowrap'
                    >
                        Search
                    </button>
                </div>
            </div>

            {/* Mobile Sidebar */}
            <div className='hidden md-lg:block'>
                <div onClick={() => setShowSidebar(true)} className={`fixed duration-200 transition-all ${showSidebar ? 'invisible' : 'visible'} hidden md-lg:block w-screen h-screen bg-[rgba(0,0,0,0.5)] top-0 left-0 z-20`}>  
                </div> 

                <div className={`w-[300px] z-[9999] transition-all duration-200 fixed ${showSidebar ? '-left-[300px]' : 'left-0 top-0'} overflow-y-auto bg-white h-screen py-6 px-8`}>
                    <div className='flex justify-start flex-col gap-6'>
                        <Link to='/' className='text-2xl font-bold text-slate-900'>
                            MamigloExclusive
                        </Link>

                        <div className='flex flex-col gap-4'>
                            <Link 
                                to='/' 
                                onClick={() => setShowSidebar(true)}
                                className='p-2 text-slate-700 hover:text-amber-600 hover:bg-amber-50 rounded transition'
                            >
                                Home
                            </Link>
                            <Link 
                                to='/products' 
                                onClick={() => setShowSidebar(true)}
                                className='p-2 text-slate-700 hover:text-amber-600 hover:bg-amber-50 rounded transition'
                            >
                                Shop
                            </Link>
                            <Link 
                                to='/about' 
                                onClick={() => setShowSidebar(true)}
                                className='p-2 text-slate-700 hover:text-amber-600 hover:bg-amber-50 rounded transition'
                            >
                                About Us
                            </Link>
                            <Link 
                                to='/contact' 
                                onClick={() => setShowSidebar(true)}
                                className='p-2 text-slate-700 hover:text-amber-600 hover:bg-amber-50 rounded transition'
                            >
                                Contact Us
                            </Link>
                        </div>

                        <div className='border-t pt-4'>
                            <h3 className='font-semibold text-slate-900 mb-3'>Categories</h3>
                            <div className='flex flex-col gap-2'>
                                {categorys.slice(0, 8).map((cat, i) => (
                                    <Link 
                                        key={i}
                                        to={`/products?category=${cat.slug}`}
                                        onClick={() => setShowSidebar(true)}
                                        className='text-sm text-slate-600 hover:text-amber-600 hover:pl-2 transition'
                                    >
                                        {cat.name}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div className='border-t pt-4 flex flex-col gap-3'>
                            {userInfo ? (
                                <Link 
                                    to='/dashboard'
                                    onClick={() => setShowSidebar(true)}
                                    className='flex items-center gap-2 text-slate-700 hover:text-amber-600'
                                >
                                    <FaUser /> {userInfo.name}
                                </Link>
                            ) : (
                                <Link 
                                    to='/login'
                                    onClick={() => setShowSidebar(true)}
                                    className='flex items-center gap-2 text-slate-700 hover:text-amber-600'
                                >
                                    <FaLock /> Login
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
