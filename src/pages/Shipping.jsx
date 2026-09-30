import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { place_order } from '../store/reducers/orderReducer';

const Shipping = () => {

    const { state: {products,price,shipping_fee,items }} = useLocation()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {userInfo} = useSelector(state => state.auth) 

    const [res, setRes] = useState(false)
    const [state, setState] = useState({
        name: '',
        address: '',
        phone: '',
        post: '',
        province: '', // Changed to "State" for Nigeria
        city: '',
        area: ''
    })

    // Nigerian States List
    const nigerianStates = [
        "Lagos", "Ogun", "Osun", "Ondo", "Ekiti",
        "Abuja (FCT)", "Nasarawa", "Kwara", "Niger", 
        "Kebbi", "Sokoto", "Zamfara", "Katsina", "Kano", 
        "Jigawa", "Yobe", "Borno", "Adamawa", "Taraba", 
        "Gombe", "Bauchi", "Plateau", "Kaduna", 
        "Enugu", "Anambra", "Imo", "Abia", "Ebonyi",
        "Cross River", "Akwa Ibom", "Rivers", "Bayelsa", "Delta"
    ];

    // Delivery fees by state (in Naira)
    const deliveryFeeByState = {
        "Lagos": 500,
        "Ogun": 800,
        "Osun": 800,
        "Ondo": 900,
        "Ekiti": 850,
        "Abuja (FCT)": 700,
        "Nasarawa": 900,
        "Kwara": 800,
        "Niger": 850,
        "Kebbi": 1200,
        "Sokoto": 1200,
        "Zamfara": 1200,
        "Katsina": 1100,
        "Kano": 1000,
        "Jigawa": 1100,
        "Yobe": 1100,
        "Borno": 1300,
        "Adamawa": 1200,
        "Taraba": 1200,
        "Gombe": 1000,
        "Bauchi": 1000,
        "Plateau": 900,
        "Kaduna": 800,
        "Enugu": 900,
        "Anambra": 800,
        "Imo": 800,
        "Abia": 850,
        "Ebonyi": 950,
        "Cross River": 1000,
        "Akwa Ibom": 950,
        "Rivers": 900,
        "Bayelsa": 950,
        "Delta": 900
    };

    const inputHandle = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const save = (e) => {
        e.preventDefault()
        const {name,address,phone,post,province,city,area } = state;
        if (name && address && phone && post && province && city && area) {
            setRes(true)
        }

    }

    const placeOrder = () => {
        dispatch(place_order({
            price,
            products,
            shipping_fee,
            items,
            shippingInfo : state,
            userId: userInfo.id,
            navigate 

        }))
    }

    return (
        <div>
          <Header/>
          <section className='bg-[url("http://localhost:3000/images/banner/shop.png")] h-[220px] mt-6 bg-cover bg-no-repeat relative bg-left'>
            <div className='absolute left-0 top-0 w-full h-full bg-[#2422228a]'>
                <div className='w-[85%] md:w-[80%] sm:w-[90%] lg:w-[90%] h-full mx-auto'>
                    <div className='flex flex-col justify-center gap-1 items-center h-full w-full text-white'>
                <h2 className='text-3xl font-bold'>Shipping & Delivery</h2>
                <div className='flex justify-center items-center gap-2 text-2xl w-full'>
                        <Link to='/'>Home</Link>
                        <span className='pt-1'>
                        <IoIosArrowForward />
                        </span>
                        <span>Shipping</span>
                      </div>
                    </div> 
                </div> 
            </div> 
           </section>


    <section className='bg-[#eeeeee]'>
        <div className='w-[85%] lg:w-[90%] md:w-[90%] sm:w-[90%] mx-auto py-16'>
           <div className='w-full flex flex-wrap'>
            <div className='w-[67%] md-lg:w-full'>
                <div className='flex flex-col gap-3'>
                    <div className='bg-white p-6 shadow-sm rounded-md'>

                        <h2 className='text-slate-600 font-bold pb-3'>Delivery Address</h2>

            {
              !res && <>
             <form onSubmit={save}>
            <div className='flex md:flex-col md:gap-2 w-full gap-5 text-slate-600'>
            <div className='flex flex-col gap-1 mb-2 w-full'>
                <label htmlFor="name" className='font-medium'>Full Name</label>
                <input onChange={inputHandle} value={state.name} type="text" className='w-full px-3 py-2 border border-slate-200 outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-200 rounded-md' name="name" id="name" placeholder='Full Name' required/> 
            </div>

            <div className='flex flex-col gap-1 mb-2 w-full'>
                <label htmlFor="phone" className='font-medium'>Phone Number</label>
                <input onChange={inputHandle} value={state.phone} type="tel" className='w-full px-3 py-2 border border-slate-200 outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-200 rounded-md' name="phone" id="phone" placeholder='+234 (phone number)' required/> 
            </div> 
            </div>

            <div className='flex md:flex-col md:gap-2 w-full gap-5 text-slate-600'>
            <div className='flex flex-col gap-1 mb-2 w-full'>
                <label htmlFor="address" className='font-medium'>Street Address</label>
                <input onChange={inputHandle} value={state.address} type="text" className='w-full px-3 py-2 border border-slate-200 outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-200 rounded-md' name="address" id="address" placeholder='Street address / Building' required/> 
            </div>

            <div className='flex flex-col gap-1 mb-2 w-full'>
                <label htmlFor="area" className='font-medium'>Apartment / Unit</label>
                <input onChange={inputHandle} value={state.area} type="text" className='w-full px-3 py-2 border border-slate-200 outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-200 rounded-md' name="area" id="area" placeholder='Apartment, suite, etc. (optional)' /> 
            </div> 
            </div>

            <div className='flex md:flex-col md:gap-2 w-full gap-5 text-slate-600'>
            <div className='flex flex-col gap-1 mb-2 w-full'>
                <label htmlFor="province" className='font-medium'>State</label>
                <select onChange={inputHandle} value={state.province} className='w-full px-3 py-2 border border-slate-200 outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-200 rounded-md bg-white' name="province" id="province" required>
                    <option value="">Select your state</option>
                    {nigerianStates.map((s, i) => (
                        <option key={i} value={s}>{s}</option>
                    ))}
                </select>
            </div>

            <div className='flex flex-col gap-1 mb-2 w-full'>
                <label htmlFor="city" className='font-medium'>Local Government Area / City</label>
                <input onChange={inputHandle} value={state.city} type="text" className='w-full px-3 py-2 border border-slate-200 outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-200 rounded-md' name="city" id="city" placeholder='LGA or City' required/> 
            </div> 
            </div>

            <div className='flex md:flex-col md:gap-2 w-full gap-5 text-slate-600'>
            <div className='flex flex-col gap-1 mb-2 w-full'>
                <label htmlFor="post" className='font-medium'>Postal Code</label>
                <input onChange={inputHandle} value={state.post} type="text" className='w-full px-3 py-2 border border-slate-200 outline-none focus:border-amber-500 focus:ring-1 focus:ring-amber-200 rounded-md' name="post" id="post" placeholder='Postal Code (optional)' /> 
            </div>

            <div className='flex flex-col gap-1 mt-7 mb-2 w-full'>
               <button type='submit' className='px-3 py-[10px] rounded-md hover:shadow-amber-500/50 hover:shadow-lg bg-amber-600 text-white font-medium transition duration-200'>Save & Continue</button>
            </div> 
            </div> 
                </form>

                
                </>
            }

            {
                res && <div className='flex flex-col gap-3'>
                <h2 className='text-slate-700 font-bold pb-2'>Delivery Address Confirmed</h2>
                <div className='bg-slate-50 p-4 rounded-md border border-slate-200'>
                    <p className='text-slate-600 mb-2'>
                        <span className='bg-amber-100 text-amber-800 text-xs font-semibold mr-2 px-2 py-1 rounded'>Delivery Address</span>
                    </p>
                    <p className='text-slate-700 font-medium'>{state.name}</p>
                    <p className='text-slate-600 text-sm'>{state.phone}</p>
                    <p className='text-slate-600 text-sm'>{state.address} {state.area && ', ' + state.area}</p>
                    <p className='text-slate-600 text-sm'>{state.city}, {state.province} {state.post && state.post}</p>
                </div>

                <button onClick={() => setRes(false)} className='text-amber-600 hover:text-amber-700 font-medium text-sm self-start mt-2'> ← Change Address</button>

            </div>
            }
              </div>

              {
                   products.map((p,i) => <div key={i} className='flex bg-white p-4 flex-col gap-2 rounded-md shadow-sm'>
                   <div className='flex justify-start items-center'>
                       <h2 className='text-md text-slate-600 font-bold'>Order Items</h2>
                   </div>

                   {
                       p.products.map((pt,i) => <div key={i} className='w-full flex flex-wrap border-b border-slate-100 pb-4 last:border-b-0 last:pb-0'>
                       <div className='flex sm:w-full gap-2 w-7/12'>
                           <div className='flex gap-2 justify-start items-center'>
                       <img className='w-[80px] h-[80px] object-cover rounded' src={pt.productInfo.images[0]} alt={pt.productInfo.name} />
                       <div className='pr-4 text-slate-600'>
                       <h2 className='text-md font-semibold'>{pt.productInfo.name}</h2>
                       <span className='text-xs text-slate-500'>Brand: {pt.productInfo.brand}</span>
                       <span className='text-xs text-slate-500 block'>Qty: {pt.quantity}</span>
                       </div>
                           </div>
                       </div>

   <div className='flex justify-between w-5/12 sm:w-full sm:mt-3'>
       <div className='pl-4 sm:pl-0'>
       <h2 className='text-lg text-amber-600 font-bold'>₦{pt.productInfo.price - Math.floor((pt.productInfo.price * pt.productInfo.discount) / 100)}</h2>
           <p className='line-through text-xs text-slate-400'>₦{pt.productInfo.price}</p>
           {pt.productInfo.discount > 0 && <p className='text-xs text-green-600'>-{pt.productInfo.discount}%</p>}
       </div>
      
   </div>


                   </div>)
                   }

               </div>) 
                } 
 

                </div> 
            </div>

            <div className='w-[33%] md-lg:w-full'>
    <div className='pl-3 md-lg:pl-0 md-lg:mt-5'>
        
            <div className='bg-white p-4 text-slate-600 flex flex-col gap-4 rounded-md shadow-sm sticky top-20 md-lg:static'>
                <h2 className='text-xl font-bold text-slate-800'>Order Summary</h2>
                
                <div className='border-t border-slate-200 pt-4'>
                    <div className='flex justify-between items-center mb-2'>
                        <span className='text-slate-600'>Subtotal</span>
                        <span className='font-medium'>₦{price}</span>
                    </div>
                    <div className='flex justify-between items-center mb-4'>
                        <span className='text-slate-600'>Delivery Fee ({state.province && `${state.province}`})</span>
                        <span className='font-medium'>₦{shipping_fee || 0}</span>
                    </div>

                    <div className='border-t border-slate-200 pt-4 flex justify-between items-center'>
                        <span className='text-lg font-bold text-slate-800'>Total Payment</span>
                        <span className='text-2xl text-amber-600 font-bold'>₦{price + shipping_fee}</span>
                    </div>
                </div>
               

                <button onClick={placeOrder} disabled={res ? false : true} className={`px-5 py-3 rounded-md font-bold text-white uppercase text-sm transition duration-200 ${res ? 'bg-amber-600 hover:bg-amber-700 hover:shadow-lg' : 'bg-slate-300 cursor-not-allowed'}  `}>
                   {res ? 'Proceed to Payment' : 'Complete Address First'}
                </button>

                <p className='text-xs text-slate-500 text-center'>By placing an order, you agree to our Terms & Conditions</p>

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

export default Shipping;
