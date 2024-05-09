import { useEffect, useState } from 'react'
import axios from "axios"
import { useDispatch } from "react-redux"
// import { addMockupData } from '../../redux/store'
import { addData } from '../../redux/slice/dataSlice'
import { Link } from 'react-router-dom'


const ProductList = () => {
    const [data, setData] = useState([])
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(true); // State for loading indicator
    const dispatch = useDispatch();

    const getAllData = async () => {
        try {
            const res = await axios.get("https://solesphere.onrender.com/get-products");
            dispatch(addData(res?.data?.products));
            setData(res?.data?.products);
        } catch (error) {
            console.error('Error fetching data:', error);
        } finally {
            setLoading(false); // Set loading to false after data is fetched
        }
    }
    useEffect(() => {
        getAllData()
    }, [])

    // Function to handle search input change
    const handleSearchInputChange = (e) => {
        setSearchQuery(e.target.value);
    };
    const filteredData = data.filter(item =>
        item.title.shortTitle.toLowerCase().includes(searchQuery.toLowerCase())
    );


    return (
        <div className='mx-auto'>
            <div className='flex justify-around items-center flex-row mx-4 mt-4 -mb-4'>
                <div className='mt-6 flex flex-wrap gap-4 justify-center my-4'>
                    <Link to="#" className='bg-black text-white px-4 py-1 rounded-lg cursor-pointer hover:bg-gray-900 '>Men Wear</Link>
                    <Link to="#" className='bg-black text-white cursor-pointer px-4 py-1 rounded-lg hover:bg-gray-900'>Women Wear</Link>
                    <Link to="#" className='bg-black text-white cursor-pointer px-4 py-1 rounded-lg hover:bg-gray-900'>Kids Wear</Link>
                </div>
                <div className="flex md:order-2">
                    <div className="relative hidden md:block">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                            <span className="sr-only">Search icon</span>
                        </div>
                        <input
                            type="text"
                            className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                            placeholder="Search..."
                            value={searchQuery}
                            onChange={handleSearchInputChange}
                        />
                    </div>
                </div>
            </div>

            {
                loading ? (
                    <div className="flex w-full flex-col justify-center flex-wrap gap-4 items-center mt-12">
                        <div className='flex gap-4 w-full  m-auto flex-wrap items-center justify-center'>
                            {[...Array(10)].map((_, index) => (
                                <div key={index} role="status" className="flex m-10 items-center justify-center h-56  bg-gray-300 rounded-lg w-[90%] lg:w-1/3 max-w-xs animate-pulse dark:bg-gray-500">
                                    <svg className="w-10 h-10 text-gray-200 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                        <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                                        <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM9 13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2Zm4 .382a1 1 0 0 1-1.447.894L10 13v-2l1.553-1.276a1 1 0 0 1 1.447.894v2.764Z" />
                                    </svg>
                                    <span className="sr-only">Loading...</span>
                                </div>
                            ))
                            }
                        </div>

                    </div>
                ) : (
                    <div className='flex gap-2 m-auto flex-wrap items-center justify-center'>
                        {
                            filteredData.map(item => (
                                <div key={item.id} className="relative m-10 border border-gray-300 flex w-full max-w-xs flex-col overflow-hidden rounded-sm  shadow-lg hover:shadow-gray-100 bg-white" >
                                    <Link>
                                        <Link className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-sm" to="#">
                                            <img className="object-cover w-full" src={item?.url} alt="product image" />
                                            <span className="absolute top-0 left-0 m-2 rounded-sm bg-black px-2 text-center text-sm font-medium text-white">{item?.price?.discount}% OFF</span>
                                        </Link>
                                        <div className="mt-4 px-5 pb-5">
                                            <Link to="#">
                                                <h5 className="text-xl tracking-tight text-slate-900">{item.title.shortTitle}</h5>
                                            </Link>
                                            <div className="mt-2 mb-5 flex items-center justify-between">
                                                <p>
                                                    <span className="text-3xl font-bold text-slate-900">${item?.price?.cost}</span>
                                                    <span className="text-sm text-slate-900 line-through">${item?.price?.mrp}</span>
                                                </p>
                                                <div className="flex items-center">
                                                    <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                    <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                    <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                    <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                    <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                                    </svg>
                                                    <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">5.0</span>
                                                </div>
                                            </div>
                                            <Link to={"/product-detail"} className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                                                </svg>
                                                Add to cart</Link>
                                        </div>
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                )}
        </div>
    )
}

export default ProductList
