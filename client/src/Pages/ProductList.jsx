/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/slice/cartSlice';
import toast from 'react-hot-toast';
import { motion, AnimatePresence } from 'framer-motion';

// Animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            when: "beforeChildren"
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    }
};

const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: "backOut"
        }
    },
    hover: {
        scale: 1.05,
        transition: { duration: 0.3 }
    }
};

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut"
        }
    },
    hover: {
        y: -5,
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        transition: {
            duration: 0.3,
            ease: "easeOut"
        }
    }
};

const buttonVariants = {
    hover: {
        scale: 1.05,
        boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.2)",
        transition: {
            duration: 0.3,
            yoyo: Infinity,
            ease: "easeInOut"
        }
    },
    tap: {
        scale: 0.95
    }
};

const ProductList = () => {
    const [data, setData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(true);
    const [filteredData, setFilteredData] = useState([]);
    const [hoveredProduct, setHoveredProduct] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;
    const dispatch = useDispatch();

    // Fallback products data
    const fallbackProducts = [
        {
            _id: '1',
            url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/o/5/m/7-atg-496-7-action-white-original-imahbbgpzv2ujvzm.jpeg?q=70',
            title: { shortTitle: 'Men Running Shoes' },
            price: { cost: 1299, mrp: 2499, discount: 48 },
            ProductType: 'menwear',
            quantity: 10
        },
        {
            _id: '2',
            url: 'https://rukminim2.flixcart.com/image/612/612/ksxjs7k0/shoe/e/t/y/8-7510-neu-pager-black-original-imag6e7cyzxs9kxq.jpeg?q=70',
            title: { shortTitle: 'Women Sneakers' },
            price: { cost: 999, mrp: 1999, discount: 50 },
            ProductType: 'womenwear',
            quantity: 15
        },
        {
            _id: '3',
            url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/slipper-flip-flop/8/2/e/8-p4-375grn-375gry-375beg-375blk-8-footup-green-green-grey-beige-original-imah4wf5cjxwg8zs.jpeg?q=70',
            title: { shortTitle: 'Kids Sports Shoes' },
            price: { cost: 799, mrp: 1499, discount: 47 },
            ProductType: 'childwear',
            quantity: 8
        },
        {
            _id: '4',
            url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-sandal/5/l/f/9-454-9-density-grey-original-imahfzfsftbs9qzz.jpeg?q=70',
            title: { shortTitle: 'Men Casual Shoes' },
            price: { cost: 1499, mrp: 2999, discount: 50 },
            ProductType: 'menwear',
            quantity: 12
        },
        {
            _id: '5',
            url: 'https://rukminim2.flixcart.com/image/612/612/kbzergw0/sandal/t/h/c/sl02-8-amico-brown-original-imaft7g7fvhd4huq.jpeg?q=70',
            title: { shortTitle: 'Women Sandals' },
            price: { cost: 899, mrp: 1799, discount: 50 },
            ProductType: 'womenwear',
            quantity: 20
        },
        {
            _id: '6',
            url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/f/4/0/-original-imahbabyt6rp5p3p.jpeg?q=70',
            title: { shortTitle: 'Kids School Shoes' },
            price: { cost: 699, mrp: 1299, discount: 46 },
            ProductType: 'childwear',
            quantity: 15
        },
        {
            _id: '7',
            url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/w/5/n/10-sndl-clog-52-blk-10-bruton-black-original-imah4jvecxgbydzj.jpeg?q=70',
            title: { shortTitle: 'Men Formal Shoes' },
            price: { cost: 1799, mrp: 3499, discount: 49 },
            ProductType: 'menwear',
            quantity: 10
        },
        {
            _id: '8',
            url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/slipper-flip-flop/c/q/7/7-mrj1634-aadi-red-original-imagfsw2ymksemzq-bb.jpeg?q=70',
            title: { shortTitle: 'Women Running Shoes' },
            price: { cost: 1199, mrp: 2299, discount: 48 },
            ProductType: 'womenwear',
            quantity: 18
        },
        {
            _id: '9',
            url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/w/f/m/7-5-m-112-41-5-aeonik-beige-original-imahfffsv7ffdgjm.jpeg?q=70',
            title: { shortTitle: 'Kids Casual Shoes' },
            price: { cost: 599, mrp: 999, discount: 40 },
            ProductType: 'childwear',
            quantity: 12
        },
        {
            _id: '10',
            url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/e/6/b/6-rng-830-wht-6-bruton-white-original-imahcpkxrkfccca9.jpeg?q=70',
            title: { shortTitle: 'Men Sports Shoes' },
            price: { cost: 1599, mrp: 2999, discount: 47 },
            ProductType: 'menwear',
            quantity: 14
        },
        {
            _id: '11',
            url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/t/f/0/11-bob1015-11-knoos-brown-original-imahcqkjunhgfte2.jpeg?q=70',
            title: { shortTitle: 'Men Walking Shoes' },
            price: { cost: 1399, mrp: 2599, discount: 46 },
            ProductType: 'menwear',
            quantity: 10
        },
        {
            _id: '12',
            url: 'https://rukminim2.flixcart.com/image/612/612/k2c6rgw0/sandal/3/8/k/fg-od-8-bata-blue-original-imafkyv3b69vdnhk.jpeg?q=70',
            title: { shortTitle: 'Women Casual Shoes' },
            price: { cost: 1099, mrp: 2099, discount: 48 },
            ProductType: 'womenwear',
            quantity: 15
        },
        {
            _id: '13',
            url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/slipper-flip-flop/p/e/g/10-black-green-red-grey-fmc-11-combo-footox-black-green-red-grey-original-imahfhz3sqaaqzbz.jpeg?q=70',
            title: { shortTitle: 'Kids Running Shoes' },
            price: { cost: 899, mrp: 1699, discount: 47 },
            ProductType: 'childwear',
            quantity: 8
        },
        {
            _id: '14',
            url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/slipper-flip-flop/h/0/h/9-007-cork-black-doctor-health-super-soft-black-original-imahcea2vfgwfkwf.jpeg?q=70',
            title: { shortTitle: 'Men Hiking Shoes' },
            price: { cost: 1899, mrp: 3599, discount: 47 },
            ProductType: 'menwear',
            quantity: 12
        },
        {
            _id: '15',
            url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/slipper-flip-flop/o/b/a/6-ff-375bk-375mrn-footup-black-maroon-original-imahcgb5jewgbqpr.jpeg?q=70',
            title: { shortTitle: 'Women Hiking Shoes' },
            price: { cost: 1699, mrp: 3299, discount: 48 },
            ProductType: 'womenwear',
            quantity: 20
        },
        {
            _id: '16',
            url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/p/l/n/6-mexico-11-6-asian-green-original-imah3nxzfcgrn75k.jpeg?q=70',
            title: { shortTitle: 'Kids Sandals' },
            price: { cost: 499, mrp: 899, discount: 44 },
            ProductType: 'childwear',
            quantity: 15
        },
        {
            _id: '17',
            url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/k/y/a/7-106-red-7-7-overstar-red-original-imah5hmjdq5nt8wm.jpeg?q=70',
            title: { shortTitle: 'Men Loafers' },
            price: { cost: 1499, mrp: 2799, discount: 46 },
            ProductType: 'menwear',
            quantity: 10
        },
        {
            _id: '18',
            url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/w/t/2/8-gw-707-42-gulass-wick-beige-original-imah8t8a6xjjqynw.jpeg?q=70',
            title: { shortTitle: 'Women Loafers' },
            price: { cost: 1299, mrp: 2499, discount: 48 },
            ProductType: 'womenwear',
            quantity: 18
        },
        {
            _id: '19',
            url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-shoe/u/l/g/7-mrj1621-41-aadi-black-original-imahfpycjhffvpwr.jpeg?q=70',
            title: { shortTitle: 'Kids Boots' },
            price: { cost: 799, mrp: 1499, discount: 47 },
            ProductType: 'childwear',
            quantity: 12
        },
        {
            _id: '20',
            url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/7/x/l/6-casual-24503-6-nobelite-white-black-original-imah9w4guzkca8jn.jpeg?q=70',
            title: { shortTitle: 'Men Boots' },
            price: { cost: 1999, mrp: 3999, discount: 50 },
            ProductType: 'menwear',
            quantity: 14
        },
        {
            _id: '21',
            url: 'https://rukminim2.flixcart.com/image/612/612/kxhvf680/slipper-flip-flop/t/9/p/6-accupressure-slippers-sharvaya-multicolor-original-imag9xp4dkyp7mma.jpeg?q=70',
            title: { shortTitle: 'Women Boots' },
            price: { cost: 1799, mrp: 3499, discount: 49 },
            ProductType: 'womenwear',
            quantity: 16
        },
        {
            _id: '22',
            url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shoe/p/k/5/-original-imahan48tkuv24as.jpeg?q=70',
            title: { shortTitle: 'Kids Slippers' },
            price: { cost: 399, mrp: 699, discount: 43 },
            ProductType: 'childwear',
            quantity: 20
        },
        {
            _id: '23',
            url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/9/8/6/6-spo-r-6011-6-bersache-black-original-imahb2ggmuynsysf.jpeg?q=70',
            title: { shortTitle: 'Men Slippers' },
            price: { cost: 599, mrp: 999, discount: 40 },
            ProductType: 'menwear',
            quantity: 25
        },
        {
            _id: '24',
            url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-shoe/i/4/s/7-sh-delta-20-asian-multicolor-original-imah2ymtnzbxctfs.jpeg?q=70',
            title: { shortTitle: 'Women Slippers' },
            price: { cost: 499, mrp: 899, discount: 44 },
            ProductType: 'womenwear',
            quantity: 22
        },
        {
            _id: '25',
            url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/3/g/d/10-litewalk-10-liberty-black-original-imahc545ffgntryg.jpeg?q=70',
            title: { shortTitle: 'Men Canvas Shoes' },
            price: { cost: 899, mrp: 1599, discount: 44 },
            ProductType: 'menwear',
            quantity: 15
        },
        {
            _id: '26',
            url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/slipper-flip-flop/j/i/0/7-rb07-dr-ortho-red-black-original-imah6fegttg4mupy.jpeg?q=70',
            title: { shortTitle: 'Women Canvas Shoes' },
            price: { cost: 799, mrp: 1399, discount: 43 },
            ProductType: 'womenwear',
            quantity: 18
        },
        {
            _id: '27',
            url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-slipper-flip-flop/9/j/0/8-waker-maan-green-original-imagt98tzgujfz4t.jpeg?q=70',
            title: { shortTitle: 'Kids Canvas Shoes' },
            price: { cost: 599, mrp: 999, discount: 40 },
            ProductType: 'childwear',
            quantity: 12
        },
        {
            _id: '28',
            url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/slipper-flip-flop/t/m/q/8-zxt333-calibrel-brown-original-imahcdjrggknvpyt.jpeg?q=70',
            title: { shortTitle: 'Men Flip Flops' },
            price: { cost: 499, mrp: 899, discount: 44 },
            ProductType: 'menwear',
            quantity: 30
        },
        {
            _id: '29',
            url: 'https://rukminim2.flixcart.com/image/612/612/l3nco7k0/sandal/3/1/a/10-611-white-pu-pine-white-original-imageq5yccjtqzdb.jpeg?q=70',
            title: { shortTitle: 'Women Flip Flops' },
            price: { cost: 399, mrp: 699, discount: 43 },
            ProductType: 'womenwear',
            quantity: 28
        },
        {
            _id: '30',
            url: 'https://rukminim2.flixcart.com/image/612/612/ksxjs7k0/shoe/e/t/y/8-7510-neu-pager-black-original-imag6e7cyzxs9kxq.jpeg?q=70',
            title: { shortTitle: 'Kids Flip Flops' },
            price: { cost: 299, mrp: 499, discount: 40 },
            ProductType: 'childwear',
            quantity: 25
        },
        {
            _id: '31',
            url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/slipper-flip-flop/w/w/9/8-flop-6061-bersache-black-original-imah3dubzpmpefgr.jpeg?q=70',
            title: { shortTitle: 'Women Flip Flops' },
            price: { cost: 399, mrp: 699, discount: 43 },
            ProductType: 'womenwear',
            quantity: 28
        },
        {
            _id: '32',
            url: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shopsy-sandal/o/u/i/10-sy-04sangrn-10-fav-shoes-green-original-imahfjjywzy3jhwg.jpeg?q=70',
            title: { shortTitle: 'Kids Flip Flops' },
            price: { cost: 299, mrp: 499, discount: 40 },
            ProductType: 'childwear',
            quantity: 25
        }
    ];

    const getAllData = async () => {
        try {
            const res = await axios.get("https://solesphere-backend12.onrender.com/get-products");
            setData(res?.data?.products || fallbackProducts);
            setFilteredData(res?.data?.products || fallbackProducts);
        } catch (error) {
            console.error('Error fetching data:', error);
            setData(fallbackProducts);
            setFilteredData(fallbackProducts);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getAllData();
    }, []);

    const handleSearchInputChange = (e) => {
        setSearchQuery(e.target.value);
        filterData(e.target.value);
    };

    const filterData = (query) => {
        const filtered = data.filter(item =>
            item.title.shortTitle.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredData(filtered);
        setCurrentPage(1);
    };

    const handleCategoryFilter = (category) => {
        let filtered;
        if (category === "all") {
            filtered = data;
        } else {
            filtered = data.filter(item =>
                item.ProductType === category.toLowerCase()
            );
        }
        setFilteredData(filtered);
        setCurrentPage(1);
    };

    const paginatedData = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return filteredData.slice(startIndex, endIndex);
    };

    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    const handlePrevPage = () => {
        setCurrentPage(prev => Math.max(prev - 1, 1));
    };

    const handleNextPage = () => {
        setCurrentPage(prev => Math.min(prev + 1, totalPages));
    };

    return (
        <div className='mx-auto'>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className='flex justify-start lg:justify-around px-0 lg:px-3 items-center flex-wrap flex-col lg:flex-row mt-4 mb-4'
            >
                <motion.div
                    className='mt-6 flex flex-wrap gap-2 lg:gap-4 justify-center items-center my-6 px-2'
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {["all", "menwear", "womenwear", "childwear"].map((category) => (
                        <motion.button
                            key={category}
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className='bg-[#D9534F] text-white text-sm md:text-xl lg:text-[18px] px-1 md:px-2 lg:px-4 py-1 rounded-lg cursor-pointer hover:bg-orange-700'
                            onClick={() => handleCategoryFilter(category)}
                        >
                            {category === "all" ? "All" :
                                category === "menwear" ? "Men Wear" :
                                    category === "womenwear" ? "Women Wear" : "Kids Wear"}
                        </motion.button>
                    ))}
                </motion.div>

                <motion.div
                    className="flex md:order-2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                            <span className="sr-only">Search icon</span>
                        </div>
                        <motion.input
                            type="text"
                            className="block w-full p-2 ps-10 text-sm text-gray-900/50 border border-gray-300 rounded-lg bg-gray-50 dark:focus:border-blue-500"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={handleSearchInputChange}
                            whileFocus={{
                                boxShadow: "0 0 0 2px rgba(217, 83, 79, 0.5)",
                                borderColor: "#D9534F"
                            }}
                        />
                    </div>
                </motion.div>
            </motion.div>

            {loading ? (
                <motion.div
                    className="flex w-full flex-col justify-center flex-wrap gap-4 items-center mt-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    <div className='flex gap-4 w-full m-auto flex-wrap items-center justify-center'>
                        {[...Array(10)].map((_, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0.5 }}
                                animate={{ opacity: [0.5, 1, 0.5] }}
                                transition={{
                                    duration: 1.5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="flex m-10 items-center justify-center h-56 bg-gray-300 rounded-lg w-[90%] lg:w-1/3 max-w-xs dark:bg-gray-500"
                            >
                                <svg className="w-10 h-10 text-gray-200 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                                    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z" />
                                </svg>
                                <span className="sr-only">Loading...</span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            ) : (
                <div className='w-full'>
                    {filteredData.length === 0 ? (
                        <motion.div
                            className="flex justify-center mt-10"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="text-center">
                                <motion.img
                                    src="https://img.freepik.com/free-vector/no-data-concept-illustration_114360-626.jpg?size=626&ext=jpg"
                                    alt="No products found"
                                    initial={{ scale: 0.8 }}
                                    animate={{ scale: 1 }}
                                    transition={{ duration: 0.5 }}
                                />
                                <motion.p
                                    className="text-xl font-semibold text-gray-600 mt-4"
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                >
                                    No products found matching your search
                                </motion.p>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            className='flex gap-2 lg:gap-5 m-auto w-full flex-wrap items-center justify-center'
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            {paginatedData().map(item => (
                                <motion.div
                                    key={item._id}
                                    className='w-[80%] sm:w-[45%] md:w-[30%] lg:w-[23%] xl:w-[22%] relative'
                                    onMouseEnter={() => setHoveredProduct(item)}
                                    onMouseLeave={() => setHoveredProduct(null)}
                                    variants={itemVariants}
                                    layout
                                >
                                    <motion.div
                                        className="relative m-2 lg:m-3 border rounded-lg border-[#EB6440] flex flex-col max-w-xs overflow-hidden shadow-xl hover:shadow-gray-500 bg-white"
                                        variants={cardVariants}
                                        initial="hidden"
                                        animate="visible"
                                        whileHover="hover"
                                    >
                                        <motion.div
                                            className="relative mx-3 mt-3 flex h-42 lg:h-48 overflow-hidden rounded-sm"
                                            variants={imageVariants}
                                        >
                                            <motion.img
                                                className="object-contain w-full rounded-lg"
                                                src={item?.url}
                                                alt={item?.title?.shortTitle}
                                                whileHover={{ scale: 1.05 }}
                                            />
                                            <motion.span
                                                className="absolute top-0 left-0 m-2 rounded-sm bg-black px-2 text-center text-sm font-medium text-white"
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                transition={{ delay: 0.3 }}
                                            >
                                                {item?.price?.discount}% OFF
                                            </motion.span>
                                        </motion.div>
                                        <div className="mt-4 px-4 pb-4 flex flex-col">
                                            <motion.h5
                                                className="text-md font-semibold tracking-tight text-slate-900"
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: 0.2 }}
                                            >
                                                {item?.title?.shortTitle}
                                            </motion.h5>
                                            <div className="flex items-center justify-between mt-2">
                                                <motion.p
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1 }}
                                                    transition={{ delay: 0.3 }}
                                                >
                                                    <span className="text-lg font-bold text-slate-900">₹{item?.price?.cost}</span>
                                                    <span className="text-sm text-slate-900 line-through ml-2">₹{item?.price?.mrp}</span>
                                                </motion.p>
                                            </div>
                                            <div className="flex items-center justify-between mt-2 w-full">
                                                <motion.button
                                                    className="flex items-center rounded-lg justify-center bg-[#D9534F] px-2 py-2 text-center w-full text-sm text-white transition hover:bg-orange-700"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        dispatch(addToCart(item));
                                                        toast.success(`${item.title.shortTitle} added to cart`);
                                                    }}
                                                    whileHover={{ scale: 1.03 }}
                                                    whileTap={{ scale: 0.97 }}
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h18M9 12h6m-6 6h6" />
                                                    </svg>
                                                    Add to Cart
                                                </motion.button>
                                            </div>
                                        </div>

                                        {/* Hover Popup */}
                                        <AnimatePresence>
                                            {hoveredProduct && hoveredProduct._id === item._id && (
                                                <motion.div
                                                    className="absolute z-50 w-9xl mt-2 bg-white border border-gray-200 rounded-lg shadow-lg p-8 lg:py-14"
                                                    initial={{ opacity: 0, y: 20 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: 20 }}
                                                    transition={{ duration: 0.2 }}
                                                >
                                                    <div className="flex gap-4">
                                                        <motion.img
                                                            className="object-contain w-[25%] rounded-lg"
                                                            src={item?.url}
                                                            alt={item?.title?.shortTitle}
                                                            initial={{ scale: 0.9 }}
                                                            animate={{ scale: 1 }}
                                                        />
                                                        <div>
                                                            <h3 className="font-bold text-lg mb-2">{item.title.shortTitle}</h3>
                                                            <div className="flex justify-between mb-2">
                                                                <span className="font-medium">Price:</span>
                                                                <span>₹{item.price.cost} <span className="text-sm line-through text-gray-500">₹{item.price.mrp}</span></span>
                                                            </div>
                                                            <div className="flex justify-between mb-2">
                                                                <span className="font-medium">Discount:</span>
                                                                <span className="text-green-600">{item.price.discount}% OFF</span>
                                                            </div>
                                                            <div className="flex justify-between mb-2">
                                                                <span className="font-medium">Type:</span>
                                                                <span className="capitalize">{item.ProductType}</span>
                                                            </div>
                                                            <div className="flex justify-between mb-2">
                                                                <span className="font-medium">Availability:</span>
                                                                <span>{item.quantity > 0 ? 'In Stock' : 'Out of Stock'}</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="mt-3 flex justify-between flex-col gap-3 md:flex-row">
                                                        <motion.button 
                                                            whileHover={{ scale: 1.05 }}
                                                            whileTap={{ scale: 0.95 }}
                                                        >
                                                        <Link
                                                            to={`/product/${item._id}`}
                                                            className="bg-[#2737ce] text-white px-4 py-2.5 rounded text-sm hover:bg-[#15218d]"
                                                        >
                                                            View Details
                                                        </Link>
                                                    </motion.button>
                                                    <motion.button
                                                        className="bg-[#D9534F] text-white px-4 py-2 rounded text-sm hover:bg-orange-700"
                                                        onClick={() => {
                                                            dispatch(addToCart(item));
                                                            toast.success(`${item.title.shortTitle} added to cart`);
                                                        }}
                                                        whileHover={{ scale: 1.05 }}
                                                        whileTap={{ scale: 0.95 }}
                                                    >
                                                        Quick Add
                                                    </motion.button>
                                                </div>
                                                </motion.div>
                                            )}
                                </AnimatePresence>
                                    </motion.div>
                                </motion.div>
            ))}
        </motion.div>
    )
}
                </div >
            )}

{
    filteredData.length > itemsPerPage && (
        <motion.div
            className="flex justify-center my-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
        >
            <motion.button
                onClick={handlePrevPage}
                disabled={currentPage === 1}
                className={`px-4 py-2 mx-1 rounded flex items-center ${currentPage === 1 ? 'bg-gray-200 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-700'}`}
                whileHover={currentPage !== 1 ? { scale: 1.1 } : {}}
                whileTap={currentPage !== 1 ? { scale: 0.9 } : {}}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-left"><path d="m15 18-6-6 6-6" /></svg>
            </motion.button>
            <motion.div
                className="px-4 py-2 mx-1 flex items-center"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                key={currentPage} // This ensures animation on page change
            >
                {currentPage} of {totalPages}
            </motion.div>
            <motion.button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
                className={`px-4 py-2 mx-1 rounded flex items-center ${currentPage === totalPages ? 'bg-gray-200 cursor-not-allowed' : 'bg-blue-500 text-white hover:bg-blue-700'}`}
                whileHover={currentPage !== totalPages ? { scale: 1.1 } : {}}
                whileTap={currentPage !== totalPages ? { scale: 0.9 } : {}}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
            </motion.button>
        </motion.div>
    )
}
        </div >
    );
}

export default ProductList;