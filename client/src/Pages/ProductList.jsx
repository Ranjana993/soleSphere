/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = () => {
    const [data, setData] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [loading, setLoading] = useState(true);
    const [filteredData, setFilteredData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10; // Number of items per page

    const getAllData = async () => {
        try {
            const res = await axios.get("https://solesphere-backend12.onrender.com/get-products");
            setData(res?.data?.products);
            setFilteredData(res?.data?.products);
        } catch (error) {
            console.error('Error fetching data:', error);
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
        setCurrentPage(1); // Reset to the first page after filtering
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
        setCurrentPage(1); // Reset to the first page after filtering
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
            <div className='flex justify-between px-3 items-center flex-row mt-4 -mb-4'>
                <div className='mt-6 flex flex-wrap gap-4 justify-center my-4'>
                    <Link to="#" className='bg-black text-white px-4 py-1 rounded-lg cursor-pointer hover:bg-orange-700' onClick={() => handleCategoryFilter("all")}>All</Link>
                    <Link to="#" className='bg-black text-white px-4 py-1 rounded-lg cursor-pointer hover:bg-teal-900' onClick={() => handleCategoryFilter("menwear")}>Men Wear</Link>
                    <Link to="#" className='bg-black text-white cursor-pointer px-4 py-1 rounded-lg hover:bg-gray-900' onClick={() => handleCategoryFilter("womenwear")}>Women Wear</Link>
                    <Link to="#" className='bg-black text-white cursor-pointer px-4 py-1 rounded-lg hover:bg-gray-900' onClick={() => handleCategoryFilter("childwear")}>Kids Wear</Link>
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

            {loading ? (
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
                        ))}
                    </div>
                </div>
            ) : (
                <div className='w-full'>
                    {filteredData.length === 0 ? (
                        <div className="flex justify-center mt-10">
                            <span className="text-4xl font-bold text-gray-500">No Data Found</span>
                        </div>
                    ) : (
                        <div className='flex gap-5 m-auto flex-wrap items-center justify-center'>
                            {paginatedData().map(item => (
                                <div key={item._id} className='w-1/6'>
                                    <div key={item.id} className="relative m-5 border border-gray-300 flex flex-col w-full max-w-xs overflow-hidden rounded-sm  shadow-xl hover:shadow-gray-500 bg-white">
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
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center">
                                                        <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.598 4.92a1 1 0 0 0 .95.69h5.162c.969 0 1.371 1.24.588 1.81l-4.18 3.04a1 1 0 0 0-.364 1.118l1.598 4.92c.3.921-.755 1.688-1.54 1.118l-4.18-3.04a1 1 0 0 0-1.176 0l-4.18 3.04c-.784.57-1.838-.197-1.54-1.118l1.598-4.92a1 1 0 0 0-.364-1.118L.752 10.348c-.783-.57-.38-1.81.588-1.81h5.162a1 1 0 0 0 .95-.69l1.598-4.92z" />
                                                        </svg>
                                                        <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.598 4.92a1 1 0 0 0 .95.69h5.162c.969 0 1.371 1.24.588 1.81l-4.18 3.04a1 1 0 0 0-.364 1.118l1.598 4.92c.3.921-.755 1.688-1.54 1.118l-4.18-3.04a1 1 0 0 0-1.176 0l-4.18 3.04c-.784.57-1.838-.197-1.54-1.118l1.598-4.92a1 1 0 0 0-.364-1.118L.752 10.348c-.783-.57-.38-1.81.588-1.81h5.162a1 1 0 0 0 .95-.69l1.598-4.92z" />
                                                        </svg>
                                                        <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.598 4.92a1 1 0 0 0 .95.69h5.162c.969 0 1.371 1.24.588 1.81l-4.18 3.04a1 1 0 0 0-.364 1.118l1.598 4.92c.3.921-.755 1.688-1.54 1.118l-4.18-3.04a1 1 0 0 0-1.176 0l-4.18 3.04c-.784.57-1.838-.197-1.54-1.118l1.598-4.92a1 1 0 0 0-.364-1.118L.752 10.348c-.783-.57-.38-1.81.588-1.81h5.162a1 1 0 0 0 .95-.69l1.598-4.92z" />
                                                        </svg>
                                                        <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.598 4.92a1 1 0 0 0 .95.69h5.162c.969 0 1.371 1.24.588 1.81l-4.18 3.04a1 1 0 0 0-.364 1.118l1.598 4.92c.3.921-.755 1.688-1.54 1.118l-4.18-3.04a1 1 0 0 0-1.176 0l-4.18 3.04c-.784.57-1.838-.197-1.54-1.118l1.598-4.92a1 1 0 0 0-.364-1.118L.752 10.348c-.783-.57-.38-1.81.588-1.81h5.162a1 1 0 0 0 .95-.69l1.598-4.92z" />
                                                        </svg>
                                                        <svg aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.598 4.92a1 1 0 0 0 .95.69h5.162c.969 0 1.371 1.24.588 1.81l-4.18 3.04a1 1 0 0 0-.364 1.118l1.598 4.92c.3.921-.755 1.688-1.54 1.118l-4.18-3.04a1 1 0 0 0-1.176 0l-4.18 3.04c-.784.57-1.838-.197-1.54-1.118l1.598-4.92a1 1 0 0 0-.364-1.118L.752 10.348c-.783-.57-.38-1.81.588-1.81h5.162a1 1 0 0 0 .95-.69l1.598-4.92z" />
                                                        </svg>
                                                    </div>
                                                </div>
                                                <Link to="#" className="flex items-center justify-center bg-black px-4 py-2 text-center text-sm text-white transition hover:bg-orange-700">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h18M9 12h6m-6 6h6" />
                                                    </svg>
                                                    Add to cart
                                                </Link>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                    <div className="flex justify-center mt-4">
                        <button
                            className={`px-4 py-2 mx-1 text-sm font-medium ${currentPage === 1 ? 'cursor-not-allowed bg-gray-300' : 'bg-black text-white hover:bg-gray-700'}`}
                            onClick={handlePrevPage}
                            disabled={currentPage === 1}
                        >
                            Previous
                        </button>
                        <span className="px-4 py-2 mx-1 text-sm font-medium">
                            Page {currentPage} of {totalPages}
                        </span>
                        <button
                            className={`px-4 py-2 mx-1 text-sm font-medium ${currentPage === totalPages ? 'cursor-not-allowed bg-gray-300' : 'bg-black text-white hover:bg-gray-700'}`}
                            onClick={handleNextPage}
                            disabled={currentPage === totalPages}
                        >
                            Next
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductList;
