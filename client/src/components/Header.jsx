
import { useState } from "react";
import Logo from "../assets/logo1.png"
import { Gift, Menu, ShoppingCart, X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [open, setOpen] = useState(false)


    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const handleOpen = () => {
        setOpen(!open);
        console.log("open ==>  ", open);
    };

    return (
        <>
            <nav className="bg-gray-900 relative border-gray-200 z-[999] dark:bg-gray-900">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to={"/"} className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={Logo} className="h-8" alt="Flowbite Logo" />
                        <span className="hidden lg:block dark:text-white uppercase">soleSphere</span>
                    </Link>
                    <div className="flex md:order-2">
                        <div className="relative hidden md:block">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                                <span className="sr-only">Search icon</span>
                            </div>
                            <input type="text" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
                        </div>
                    </div>
                    <div className="md:order-2">
                        <div className="flex flex-row gap-4">
                            <div>
                                <Link to={"#"} >
                                    {/* <UserRound className="w-[100%] text-white hover:rounded-full hover:text-orange-700" /> */}


                                    <div onClick={handleOpen} className="relative -mr-12">
                                        <img className=" w-6 lg:w-8 h-6 lg:h-8   rounded-full" src="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg" alt="user photo" />

                                        {/* Dropdown menu */}
                                        {
                                            open && (
                                                <div className=" absolute top-45 bg-red divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                                                    <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                                                        <div>Ranjana Yadav</div>

                                                    </div>
                                                    <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton">
                                                        <li>
                                                            <Link to="/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
                                                        </li>
                                                        <li>
                                                            <Link to="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign Out</Link>
                                                        </li>
                                                    </ul>

                                                </div>
                                            )
                                        }

                                    </div>
                                </Link>
                            </div>
                            <div>
                                <Link to="/cart">
                                    <ShoppingCart className=" hidden lg:block text-white hover:rounded-full hover:text-orange-700" />
                                </Link>
                            </div>
                            <div>
                                <Gift className=" text-white hidden lg:block hover:rounded-full hover:text-orange-700" />
                            </div>
                        </div>
                    </div>

                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
                        <div className="relative mt-3 md:hidden">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
                        </div>
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <Link to="/" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0  tracking-widestmd:dark:text-blue-500" aria-current="page">Home</Link>
                            </li>
                            <li>
                                <Link to={"/best-collection"} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent tracking-widest md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Collection</Link>
                            </li>
                            <li>
                                <Link to={"/contact"} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent tracking-widest md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"> Contact Us </Link>
                            </li>
                            <li>
                                <Link to={"/seller"} className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent tracking-widest md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Become a Seller </Link>
                            </li>
                        </ul>
                    </div>
                    {/* mobile  */}
                    <div className="lg:hidden md:hidden flex gap-2 items-center">
                        {isMenuOpen ? (
                            <X
                                onClick={toggleMenu}
                                className="h-6 w-6 cursor-pointer text-white mr-1"
                            />

                        ) : (
                            <Menu
                                onClick={toggleMenu}
                                className="h-6 w-6 cursor-pointer text-white  mr-1"
                            />
                        )}
                    </div>
                    {
                        isMenuOpen && (
                            <div className=" top-5 absolute mt-6 inset-x-0 m-2  z-[99999] origin-top-right transform p-2 transition lg:hidden " id="navbar-search">
                                <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                                    <li>
                                        <Link to="/" onClick={toggleMenu} className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">Home</Link>
                                    </li>
                                    <li>
                                        <Link onClick={toggleMenu} to={"/best-collection"} className="block py-2 px-3 text-white rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 hover:bg-gray-600">Best Collection</Link>
                                    </li>
                                    <li>
                                        <Link onClick={toggleMenu} to={"/contact"} className="block py-2 px-3 text-white rounded md:bg-transparent md:text-blue-700 md:p-0 hover:bg-gray-600 md:dark:text-blue-500"> Contact Us </Link>
                                    </li>
                                    <li>
                                        <Link onClick={toggleMenu} to={"/seller"} className="block py-2 px-3 text-white rounded md:bg-transparent md:text-blue-700 md:p-0 hover:bg-gray-600 md:dark:text-blue-500">Become a Seller </Link>
                                    </li>
                                    <li className=" text-white hover:rounded-full hover:text-orange-700">
                                        <Link to="/cart" onClick={toggleMenu} className="block py-2 px-3 text-white rounded md:bg-transparent md:text-blue-700 hover:bg-gray-600 md:p-0 md:dark:text-blue-500">
                                            CART
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        )
                    }
                </div>
            </nav>


        </>
    )
}

export default Header
