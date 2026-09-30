import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { get_products, get_category, get_banners } from '../store/reducers/homeReducer';
import { Link, useNavigate } from 'react-router-dom';
import { FaShieldAlt, FaRocket, FaTruck, FaHeadset } from 'react-icons/fa';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import FeatureProducts from '../components/products/FeatureProducts';
import Rating from '../components/Rating';
import { add_to_card, add_to_wishlist, messageClear } from '../store/reducers/cardReducer';
import toast from 'react-hot-toast';
import { FaRegHeart, FaEye } from 'react-icons/fa';
import { RiShoppingCartLine } from 'react-icons/ri';

const Home = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {products, latest_product, topRated_product, discount_product, categorys, banners} = useSelector(state => state.home);
    const {userInfo} = useSelector(state => state.auth);
    const {errorMessage, successMessage} = useSelector(state => state.card);

    useEffect(() => {
        dispatch(get_products());
        dispatch(get_category());
        dispatch(get_banners());
    }, [dispatch]);

    useEffect(() => {
        if (successMessage) {
            toast.success(successMessage);
            dispatch(messageClear());
        }
        if (errorMessage) {
            toast.error(errorMessage);
            dispatch(messageClear());
        }
    }, [successMessage, errorMessage, dispatch]);

    const add_card = (id) => {
        if (userInfo) {
            dispatch(add_to_card({
                userId: userInfo.id,
                quantity: 1,
                productId: id
            }));
        } else {
            navigate('/login');
        }
    };

    const add_wishlist = (pro) => {
        if (userInfo) {
            dispatch(add_to_wishlist({
                userId: userInfo.id,
                productId: pro._id,
                name: pro.name,
                price: pro.price,
                image: pro.images[0],
                discount: pro.discount,
                rating: pro.rating,
                slug: pro.slug
            }));
        } else {
            navigate('/login');
        }
    };

    const carouselResponsive = {
        superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 6 },
        desktop: { breakpoint: { max: 3000, min: 1024 }, items: 6 },
        tablet: { breakpoint: { max: 1024, min: 464 }, items: 4 },
        mobile: { breakpoint: { max: 464, min: 0 }, items: 2 }
    };

    const ProductCard = ({ product }) => (
        <div className='premium-card rounded-[22px] overflow-hidden group transition-all duration-300'>
            <div className='relative overflow-hidden bg-slate-100 h-[300px]'>
                {product.discount ? (
                    <div className='absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold z-10'>
                        -{product.discount}%
                    </div>
                ) : null}
                
                <img className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500' src={product.images[0]} alt={product.name} />
                
                <div className='absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-45 transition-all duration-300 flex items-end justify-center pb-4'>
                    <div className='flex gap-2'>
                        <button
                            onClick={() => add_wishlist(product)}
                            className='w-[40px] h-[40px] rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-amber-500 hover:text-white transition-all'
                        >
                            <FaRegHeart />
                        </button>
                        <Link
                            to={`/product/details/${product.slug}`}
                            className='w-[40px] h-[40px] rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-amber-500 hover:text-white transition-all'
                        >
                            <FaEye />
                        </Link>
                        <button
                            onClick={() => add_card(product._id)}
                            className='w-[40px] h-[40px] rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-amber-500 hover:text-white transition-all'
                        >
                            <RiShoppingCartLine />
                        </button>
                    </div>
                </div>
            </div>

            <div className='p-4'>
                <h3 className='font-semibold text-slate-900 truncate text-sm'>{product.name}</h3>
                <div className='flex items-center gap-2 mt-2'>
                    <span className='text-lg font-bold text-amber-600'>₦{product.price.toLocaleString()}</span>
                    {product.discount && (
                        <span className='text-sm text-slate-500 line-through'>₦{Math.round(product.price / (1 - product.discount / 100)).toLocaleString()}</span>
                    )}
                </div>
                <div className='mt-2'>
                    <Rating ratings={product.rating} />
                </div>
            </div>
        </div>
    );

    return (
        <div className='w-full'>
            <Header />

            {/* Hero Section */}
            <section className='bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-20 md-lg:py-12 relative overflow-hidden'>
                <div className='hero-glow absolute top-10 right-20 w-72 h-72 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-25'></div>
                <div className='hero-glow absolute -bottom-8 left-20 w-72 h-72 bg-amber-600 rounded-full mix-blend-multiply filter blur-3xl opacity-25' style={{ animationDelay: '1.5s' }}></div>
                
                <div className='w-[85%] lg:w-[90%] mx-auto relative z-10'>
                    <div className='max-w-2xl fade-up'>
                        <div className='glass-panel inline-flex items-center rounded-full px-4 py-2 text-xs uppercase tracking-[0.3em] text-amber-200 mb-6'>
                            Premium essentials
                        </div>
                        <h1 className='text-5xl md-lg:text-4xl md:text-3xl font-bold leading-tight mb-6'>
                            ELEVATE YOUR STYLE
                        </h1>
                        <p className='text-xl md-lg:text-lg text-slate-300 mb-8'>
                            Premium men's accessories designed to complete every look. From boardroom to celebration, we have you covered.
                        </p>
                        <div className='flex gap-4'>
                            <Link
                                to='/products'
                                className='px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-bold rounded-lg transition-all duration-300 inline-block shadow-[0_20px_35px_rgba(245,158,11,0.35)]'
                            >
                                SHOP NOW
                            </Link>
                            <Link
                                to='/about'
                                className='glass-panel px-8 py-4 border border-white/20 hover:bg-white hover:text-slate-900 text-white font-bold rounded-lg transition-all duration-300 inline-block'
                            >
                                ABOUT US
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Categories */}
            <section className='py-16 md-lg:py-10 bg-gradient-to-b from-[#fffaf2] via-white to-white'>
                <div className='w-[85%] lg:w-[90%] mx-auto'>
                    <div className='text-center mb-10'>
                        <span className='inline-block text-xs font-semibold uppercase tracking-[0.35em] text-amber-700 mb-3'>Curated looks</span>
                        <h2 className='text-4xl md-lg:text-3xl font-bold text-slate-900 mb-4'>Our Collections</h2>
                        <div className='w-16 h-1 bg-amber-600 mx-auto'></div>
                    </div>

                    <div className='relative'>
                        <Carousel
                            swipeable
                            draggable
                            showDots={false}
                            responsive={{
                                superLargeDesktop: { breakpoint: { max: 4000, min: 1536 }, items: 4 },
                                desktop: { breakpoint: { max: 1536, min: 1024 }, items: 3 },
                                tablet: { breakpoint: { max: 1024, min: 640 }, items: 2 },
                                mobile: { breakpoint: { max: 640, min: 0 }, items: 1 }
                            }}
                            infinite
                            autoPlay
                            autoPlaySpeed={2500}
                            pauseOnHover
                            containerClass='pb-4'
                            itemClass='px-3'
                            arrows
                            renderButtonGroupOutside={false}
                        >
                            {categorys.slice(0, 8).map((cat, i) => (
                                <Link
                                    key={i}
                                    to={`/products?category=${cat.slug}`}
                                    className='group block overflow-hidden rounded-[28px] shadow-[0_18px_45px_rgba(15,23,42,0.12)] bg-white border border-slate-200 hover:-translate-y-1 transition-all duration-300'
                                >
                                    <div className='relative h-72 overflow-hidden'>
                                        <img
                                            src={cat.image || '/placeholder-category.jpg'}
                                            alt={cat.name}
                                            className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                                        />
                                        <div className='absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/35 to-transparent'></div>
                                        <div className='absolute inset-x-0 bottom-0 p-5'>
                                            <div className='inline-flex items-center rounded-full bg-white/15 backdrop-blur-sm border border-white/30 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-white'>Collection</div>
                                            <h3 className='mt-3 text-2xl font-bold text-white'>{cat.name}</h3>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </Carousel>
                    </div>
                </div>
            </section>

            {/* Featured Products */}
            <section className='py-16 md-lg:py-10 bg-slate-50'>
                <div className='w-[85%] lg:w-[90%] mx-auto'>
                    <div className='text-center mb-12'>
                        <h2 className='text-4xl md-lg:text-3xl font-bold text-slate-900 mb-4'>Featured Collections</h2>
                        <p className='text-slate-600 mb-4'>Handpicked accessories for the discerning gentleman</p>
                        <div className='w-16 h-1 bg-amber-600 mx-auto'></div>
                    </div>

                    <div className='grid grid-cols-4 md-lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6'>
                        {products.slice(0, 8).map((product, i) => (
                            <ProductCard key={i} product={product} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose MamigloExclusive */}
            <section className='py-16 md-lg:py-10 bg-white'>
                <div className='w-[85%] lg:w-[90%] mx-auto'>
                    <div className='text-center mb-12'>
                        <h2 className='text-4xl md-lg:text-3xl font-bold text-slate-900 mb-4'>Why MamigloExclusive</h2>
                        <div className='w-16 h-1 bg-amber-600 mx-auto'></div>
                    </div>

                    <div className='grid grid-cols-4 md-lg:grid-cols-2 sm:grid-cols-1 gap-8'>
                        <div className='text-center'>
                            <div className='w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                                <FaShieldAlt className='text-3xl text-amber-600' />
                            </div>
                            <h3 className='text-xl font-bold text-slate-900 mb-2'>Premium Quality</h3>
                            <p className='text-slate-600 text-sm'>Carefully curated collections of the finest accessories</p>
                        </div>

                        <div className='text-center'>
                            <div className='w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                                <FaTruck className='text-3xl text-amber-600' />
                            </div>
                            <h3 className='text-xl font-bold text-slate-900 mb-2'>Fast Delivery</h3>
                            <p className='text-slate-600 text-sm'>Quick delivery across Nigeria with tracking</p>
                        </div>

                        <div className='text-center'>
                            <div className='w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                                <FaRocket className='text-3xl text-amber-600' />
                            </div>
                            <h3 className='text-xl font-bold text-slate-900 mb-2'>Affordable Luxury</h3>
                            <p className='text-slate-600 text-sm'>Premium style without the premium price tag</p>
                        </div>

                        <div className='text-center'>
                            <div className='w-20 h-20 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4'>
                                <FaHeadset className='text-3xl text-amber-600' />
                            </div>
                            <h3 className='text-xl font-bold text-slate-900 mb-2'>Great Support</h3>
                            <p className='text-slate-600 text-sm'>Dedicated customer service via WhatsApp</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Best Sellers */}
            <section className='py-16 md-lg:py-10 bg-slate-50'>
                <div className='w-[85%] lg:w-[90%] mx-auto'>
                    <div className='text-center mb-12'>
                        <h2 className='text-4xl md-lg:text-3xl font-bold text-slate-900 mb-4'>Best Sellers</h2>
                        <p className='text-slate-600 mb-4'>Loved by our customers across Nigeria</p>
                        <div className='w-16 h-1 bg-amber-600 mx-auto'></div>
                    </div>

                    <div className='grid grid-cols-4 md-lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6'>
                        {topRated_product.length > 0 ? topRated_product[0]?.map((product, i) => (
                            <ProductCard key={i} product={product} />
                        )) : products.slice(0, 4).map((product, i) => (
                            <ProductCard key={i} product={product} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Gift Collection */}
            <section className='py-16 md-lg:py-10 bg-gradient-to-r from-amber-50 to-amber-100 border-y-4 border-amber-600'>
                <div className='w-[85%] lg:w-[90%] mx-auto'>
                    <div className='grid grid-cols-2 md:grid-cols-1 gap-12 items-center'>
                        <div>
                            <h2 className='text-4xl md-lg:text-3xl font-bold text-slate-900 mb-6'>The Perfect Gift</h2>
                            <p className='text-slate-700 mb-4 text-lg'>
                                Looking for the perfect gift? Our premium gift sets are thoughtfully curated for every occasion:
                            </p>
                            <ul className='space-y-3 mb-8 text-slate-700'>
                                <li className='flex items-center gap-2'>
                                    <span className='text-amber-600 font-bold'>✓</span> Birthdays & Celebrations
                                </li>
                                <li className='flex items-center gap-2'>
                                    <span className='text-amber-600 font-bold'>✓</span> Weddings & Engagements
                                </li>
                                <li className='flex items-center gap-2'>
                                    <span className='text-amber-600 font-bold'>✓</span> Corporate Gifts
                                </li>
                                <li className='flex items-center gap-2'>
                                    <span className='text-amber-600 font-bold'>✓</span> Father's Day & Valentine's
                                </li>
                                <li className='flex items-center gap-2'>
                                    <span className='text-amber-600 font-bold'>✓</span> Groomsmen Gifts
                                </li>
                            </ul>
                            <Link
                                to='/products?category=gift-sets'
                                className='px-8 py-3 bg-slate-900 hover:bg-amber-600 text-white font-bold rounded-lg transition-all inline-block'
                            >
                                Explore Gift Sets
                            </Link>
                        </div>
                        <div className='bg-white rounded-lg p-8 shadow-lg text-center'>
                            <p className='text-5xl font-bold text-amber-600 mb-4'>Impress Every Time</p>
                            <p className='text-slate-700 mb-6'>
                                Whether it's a subtle detail to complete an outfit or a statement piece to celebrate a milestone, MamigloExclusive has the perfect accessory.
                            </p>
                            <p className='text-sm text-slate-600'>
                                "Style is not something that exists in dresses only. Style is in the man who wears the dress."
                            </p>
                            <p className='text-xs text-slate-500 mt-4'>- Coco Chanel</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className='py-16 md-lg:py-10 bg-slate-900 text-white'>
                <div className='w-[85%] lg:w-[90%] mx-auto text-center'>
                    <h2 className='text-4xl md-lg:text-3xl font-bold mb-6'>Complete Your Look Today</h2>
                    <p className='text-xl text-slate-300 mb-8 max-w-2xl mx-auto'>
                        Discover the accessory that perfectly complements your style. Every piece tells a story.
                    </p>
                    <Link
                        to='/products'
                        className='px-10 py-4 bg-amber-600 hover:bg-amber-700 text-white font-bold rounded-lg inline-block transition-all'
                    >
                        Browse All Products
                    </Link>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Home;
