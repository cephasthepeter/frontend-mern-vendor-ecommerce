import React, { useState,useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import { Range } from 'react-range';
import {AiFillStar} from 'react-icons/ai'
import {CiStar} from 'react-icons/ci' 
import Products from '../components/products/Products';
import {BsFillGridFill} from 'react-icons/bs'
import {FaThList} from 'react-icons/fa'
import ShopProducts from '../components/products/ShopProducts';
import Pagination from '../components/Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { price_range_product,query_products } from '../store/reducers/homeReducer';

const Shops = () => {

    const dispatch = useDispatch()
    const {products,categorys,priceRange,latest_product,totalProduct,parPage} = useSelector(state => state.home)

    useEffect(() => { 
        dispatch(price_range_product())
    },[])
    useEffect(() => { 
        setState({
            values: [priceRange.low, priceRange.high]
        })
    },[priceRange])

    const [filter, setFilter] = useState(true) 

    const [state, setState] = useState({values: [priceRange.low, priceRange.high]})
    const [rating, setRating] = useState('')
    const [styles, setStyles] = useState('grid')

   
    const [pageNumber, setPageNumber] = useState(1)

    const [sortPrice, setSortPrice] = useState('')
    const [category, setCategory] = useState('')
    const queryCategory = (e, value) => {
        if (e.target.checked) {
            setCategory(value)
        } else {
            setCategory('')
        }
    }

    useEffect(() => { 
        dispatch(
            query_products({
                low: state.values[0],
                high: state.values[1],
                category,
                rating,
                sortPrice,
                pageNumber
            })
         )
    },[state.values[0],state.values[1],category,rating,sortPrice,pageNumber])

    const resetRating = () => {
        setRating('')
        dispatch(
            query_products({
                low: state.values[0],
                high: state.values[1],
                category,
                rating: '',
                sortPrice,
                pageNumber
            })
         )
    }
    

    return (
        <div>
           <Header/>
           <section className='bg-gradient-to-r from-slate-900 to-slate-800 h-[220px] mt-6 relative'>
            <div className='w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full mx-auto flex flex-col justify-center'>
                <h2 className='text-4xl font-bold text-white mb-4'>Browse Our Collection</h2>
                <div className='flex items-center gap-2 text-white text-lg'>
                    <Link to='/' className='hover:text-amber-500 transition'>Home</Link>
                    <span className='text-amber-600'>→</span>
                    <span className='text-amber-600'>Shop</span>
                </div>
            </div> 
           </section>

           <section className='py-16 bg-slate-50'>
            <div className='w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full mx-auto'>
            <div className={` md:block hidden ${!filter ? 'mb-6' : 'mb-0'} `}>
                <button onClick={() => setFilter(!filter)} className='text-center w-full py-2 px-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold transition'>Show Filters</button> 
            </div>

            <div className='w-full flex flex-wrap gap-8'>
                <div className={`w-3/12 md-lg:w-4/12 md:w-full ${filter ? 'md:h-0 md:overflow-hidden md:mb-6' : 'md:h-auto md:overflow-auto md:mb-0' } `}>
                    <div className='bg-white p-6 rounded-lg border border-slate-200'>
                        <h2 className='text-2xl font-bold mb-6 text-slate-900 border-b pb-3'>Categories</h2>
            <div className='py-2 space-y-3'>
                {
                    categorys.map((c,i) => <div key={i} className='flex justify-start items-center gap-3'>
                        <input checked={category === c.name ? true : false} onChange={(e)=>queryCategory(e,c.name)} type="checkbox" id={c.name} className='w-4 h-4 text-amber-600 rounded cursor-pointer' />
                        <label className='text-slate-700 block cursor-pointer font-medium' htmlFor={c.name}>{c.name}</label>
                    </div>)
                }
            </div>

            <div className='py-6 flex flex-col gap-5 border-t mt-6 pt-6'>
                <h2 className='text-2xl font-bold text-slate-900'>Price Range</h2>
             
             <Range
                step={5000}
                min={priceRange.low}
                max={priceRange.high}
                values={(state.values)}
                onChange={(values) => setState({values})}
                renderTrack={({props,children}) => (
                    <div {...props} className='w-full h-[6px] bg-slate-300 rounded-full cursor-pointer'>
                        {children}
                    </div>
                )}
                renderThumb={({ props }) => (
                    <div className='w-[18px] h-[18px] bg-amber-600 rounded-full shadow-lg' {...props} />
    
                )} 
             />  
         <div className='text-center'>
         <span className='text-slate-900 font-bold text-lg'>₦{Math.floor(state.values[0]).toLocaleString()} - ₦{Math.floor(state.values[1]).toLocaleString()}</span>  
           </div>
         </div>

         <div className='py-6 flex flex-col gap-5 border-t pt-6'>
            <h2 className='text-2xl font-bold text-slate-900'>Rating</h2>
            <div className='flex flex-col gap-3'>
                 <div onClick={() => setRating(5)} className='text-amber-500 flex justify-start items-start gap-2 text-lg cursor-pointer hover:text-amber-600 transition'>
                    <span><AiFillStar/> </span>
                    <span><AiFillStar/> </span>
                    <span><AiFillStar/> </span>
                    <span><AiFillStar/> </span>
                    <span><AiFillStar/> </span>
                    <span className='text-slate-600 ml-2'>5 Star</span>
                  </div>

                  <div onClick={() => setRating(4)} className='text-amber-500 flex justify-start items-start gap-2 text-lg cursor-pointer hover:text-amber-600 transition'>
                    <span><AiFillStar/> </span>
                    <span><AiFillStar/> </span>
                    <span><AiFillStar/> </span>
                    <span><AiFillStar/> </span>
                    <span><CiStar/> </span>
                    <span className='text-slate-600 ml-2'>4 Star</span>
                  </div>

                  <div onClick={() => setRating(3)} className='text-amber-500 flex justify-start items-start gap-2 text-lg cursor-pointer hover:text-amber-600 transition'>
                    <span><AiFillStar/> </span>
                    <span><AiFillStar/> </span>
                    <span><AiFillStar/> </span>
                    <span><CiStar/> </span>
                    <span><CiStar/> </span>
                    <span className='text-slate-600 ml-2'>3 Star</span>
                  </div>

                  <div onClick={() => setRating(2)} className='text-amber-500 flex justify-start items-start gap-2 text-lg cursor-pointer hover:text-amber-600 transition'>
                    <span><AiFillStar/> </span>
                    <span><AiFillStar/> </span>
                    <span><CiStar/> </span>
                    <span><CiStar/> </span>
                    <span><CiStar/> </span>
                    <span className='text-slate-600 ml-2'>2 Star</span>
                  </div>

                  <div onClick={() => setRating(1)} className='text-amber-500 flex justify-start items-start gap-2 text-lg cursor-pointer hover:text-amber-600 transition'>
                    <span><AiFillStar/> </span>
                    <span><CiStar/> </span>
                    <span><CiStar/> </span>
                    <span><CiStar/> </span>
                    <span><CiStar/> </span>
                    <span className='text-slate-600 ml-2'>1 Star</span>
                  </div>

                  <button onClick={resetRating} className='mt-2 px-4 py-2 bg-slate-200 hover:bg-slate-300 text-slate-900 font-semibold rounded transition'>
                    Clear Filters
                  </button>
            </div> 
         </div>
                    </div>
        
        
        <div className='py-5 flex flex-col gap-4 md:hidden'>
            <Products title='Latest Arrivals'  products={latest_product} />
        </div> 
          </div>

        <div className='w-9/12 md-lg:w-8/12 md:w-full'>
            <div className='pl-8 md:pl-0'>
                <div className='py-4 bg-white mb-10 px-4 rounded-lg flex flex-wrap justify-between items-center gap-3 border border-slate-200'>
                    <h2 className='text-lg font-semibold text-slate-900'>{totalProduct} Products Found</h2>
        <div className='flex min-w-0 flex-wrap items-center gap-3'>
            <select onChange={(e)=>setSortPrice(e.target.value)} className='w-full sm:w-auto px-3 py-2 border border-slate-300 rounded-md outline-0 text-slate-700 font-medium hover:border-amber-600 focus:border-amber-600 transition'>
                <option value="">Sort By</option>
                <option value="low-to-high">Price: Low to High</option>
                <option value="high-to-low">Price: High to Low</option>
            </select>
        <div className='flex justify-center items-center gap-2 md-lg:hidden'>
            <button onClick={()=> setStyles('grid')} className={`p-2 rounded-md transition ${styles === 'grid' ? 'bg-amber-600 text-white' : 'bg-slate-200 text-slate-600 hover:bg-slate-300'}`}>
                  <BsFillGridFill/>  
            </button>
            <button onClick={()=> setStyles('list')} className={`p-2 rounded-md transition ${styles === 'list' ? 'bg-amber-600 text-white' : 'bg-slate-200 text-slate-600 hover:bg-slate-300'}`}>
                  <FaThList/>  
            </button> 
        </div> 
        </div> 
         </div> 

         <div className='pb-8'>
                  <ShopProducts products={products} styles={styles} />  
         </div>

         <div>
           {
             totalProduct > parPage &&  <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} totalItem={totalProduct} parPage={parPage} showItem={Math.floor(totalProduct / parPage )} />
           }
         </div>





            </div> 
         </div>  




            </div>
            </div> 
           </section>

           <Footer/>
        </div>
    );
};

export default Shops;